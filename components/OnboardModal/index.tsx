"use client"
import type React from "react"
import { useState } from "react"
import { Modal, Form, Input, Button, message } from "antd"
import Image from "next/image"
import Cal from "@calcom/embed-react"

interface OnboardModalProps {
  onClose: () => void
}

const OnboardModal: React.FC<OnboardModalProps> = ({ onClose }) => {
  const [form] = Form.useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [slug, setSlug] = useState("")
  const [showCalendar, setShowCalendar] = useState(false)

  const handleOrgNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const orgName = e.target.value
    if (orgName) {
      const generatedSlug = orgName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
      setSlug(generatedSlug)
    } else {
      setSlug("")
    }
  }

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSlug = e.target.value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
    setSlug(newSlug)
  }

  const handleSubmit = async (values: any) => {
    try {
      setIsSubmitting(true)
      const response = await fetch('/api/v1/onboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: values.orgName,
          email: values.adminEmail,
          slug: slug,
          status: "inactive"
        })
      })

      if (!response.ok) {
        throw new Error('Failed to create organization')
      }

      message.success("Organization created successfully!")
      setShowCalendar(true)
    } catch (err) {
      message.error("Failed to create organization. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Modal
      title={
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo/dataoculus-logo-dark.svg"
            alt="Data Oculus Logo"
            width={24}
            height={24}
            className="hidden dark:block"
          />
          <Image
            src="/images/logo/dataoculus-logo-light.svg"
            alt="Data Oculus Logo"
            width={24}
            height={24}
            className="dark:hidden"
          />
          <span>Create New Organization</span>
        </div>
      }
      open={true}
      onCancel={onClose}
      footer={null}
      maskClosable={false}
      centered
      width={showCalendar ? '100%' : 400}
      closable={true}
    >
      {!showCalendar ? (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="pt-4"
        >
          <Form.Item
            name="orgName"
            label="Organization Name"
            rules={[{ required: true, message: "Organization name is required" }]}
          >
            <Input placeholder="Enter name" onChange={handleOrgNameChange} />
          </Form.Item>

          <Form.Item
            name="adminEmail"
            label="Admin Email"
            rules={[
              { required: true, message: "Admin email is required" },
              { type: "email", message: "Please enter a valid email address" }
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          <Form.Item label="URL">
            <Input.Group compact>
              <Input
                style={{ width: '40%' }}
                disabled
                defaultValue="dataoculus.app/"
              />
              <Input
                style={{ width: '60%' }}
                value={slug}
                onChange={handleSlugChange}
                placeholder="Enter URL slug"
              />
            </Input.Group>
          </Form.Item>

          <Form.Item className="mb-0 flex justify-end">
            <div className="flex gap-2">
              <Button onClick={onClose} className="bg-white dark:bg-black">
                Cancel
              </Button>
              <Button htmlType="submit" loading={isSubmitting} style={{ backgroundColor: '#10b981', color: '#ffffff' }}>
                {isSubmitting ? "Onboarding..." : "Onboard"}
              </Button>
            </div>
          </Form.Item>
        </Form>
      ) : (
        <div className="pt-4">
          <iframe
            src={`https://cal.com/data-oculus?name=${encodeURIComponent(form.getFieldValue("orgName") || "")}&email=${encodeURIComponent(form.getFieldValue("adminEmail") || "")}&layout=column_view`}
            width="100%"
            height="100%"
            style={{ minHeight: "500px", border: "none" }}
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </Modal>
  )
}

export default OnboardModal
