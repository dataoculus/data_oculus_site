import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";

const SingleBlogPage = async () => {
  return (
    <>
      <title>{`Demystifying Data Profiling: A Practical Guide`}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-3.5 mb-10">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full dark:bg-black border border-stroke dark:border-strokedark shadow-solid-12 dark:shadow-none rounded-lg focus:outline-none focus:border-primary dark:focus:border-primary py-4 px-6"
                    />

                    <button
                      className="absolute top-0 right-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black dark:fill-white hover:fill-primary dark:hover:fill-primary transition-all duration-300"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mb-7.5">
                  Categories
                </h4>

                <ul>
                  <li className="last:mb-0 mb-3 transition-all duration-300 hover:text-primary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300 hover:text-primary">
                    <a href="#">Events</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300 hover:text-primary">
                    <a href="#">Grids</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300 hover:text-primary">
                    <a href="#">News</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300 hover:text-primary">
                    <a href="#">Rounded</a>
                  </li>
                </ul>
              </div>

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/data_profiling_intro.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                </div>

                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mt-11 mb-5">
                  Demystifying Data Profiling: A Practical Guide
                </h2>

                <ul className="flex flex-wrap gap-5 2xl:gap-7.5 mb-9">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Data Oculus Team
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: July 30, 2023
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>
                    Blogs
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    Data profiling is the process of analyzing, inspecting, and examining data to understand its meaning, structure, content, and quality. This provides crucial insights that improve data governance, compliance, and decision making.
                  </p>

                  <p>
                    In this post, we'll dive into common profiling techniques, activities, tools, and best practices. Let's get started!
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/blog-02.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">Why Data Profiling Matters</h3>

                  <p>
                    Data profiling helps uncover problems like: <br/>

                    <div>
                      <ul>
                        <li>Inaccurate, incomplete, or outdated data</li>
                        <li>Schema drift or changes in upstream systems</li>
                        <li>Constraint violations indicating corrupted data</li>
                        <li>Duplicate or inconsistent records</li>
                      </ul>
                    </div>

                    Identifying these issues early allows fixing the problems at the source rather than surprise discoveries later on. This improves trust and reliability in data.

                    Data profiling also enables:<br/>

                    <div>
                      <ul>
                        <li>Understanding data structures, relationships, and semantics</li>
                        <li>Validating data against business rules and expected models</li>
                        <li>Monitoring data quality drift over time</li>
                        <li>Smoother integration of datasets into downstream systems</li>
                      </ul>
                    </div>

                    Data issues that profiling can reveal<br/>

                    Simply put, you can't fix or reliably use data that you don't understand.
                  </p>

                  <h3 className="pt-8"> Structural Data Profiling </h3>
                  <p>
                    This analyzes the structure and relationships within data using metadata, schemas, and constraints.

                    Structural profiling identifies:<br/>

                    <div>
                      <ul>
                        <li>Column data types - numeric, text, temporal etc.</li>
                        <li>Primary key and foreign key constraints</li>
                        <li>Referential integrity relationships</li>
                        <li>Cardinality of joins - 1-1, 1-many etc.</li>
                        <li>Presence of indexes, views, partitions</li>
                      </ul>
                    </div>
                    This helps validate that the implemented data model matches assumptions and requirements.

                    For example, here is sample Jupyter notebook code to profile schemas in Pandas:
                    <div className="flex flex-wrap gap-5">
                      <Image
                          src={"/images/blog/data_profiliing_code_1.png"}
                          width={350}
                          height={200}
                          alt="image"
                      />
                    </div>
                    The output helps understand the structure like data types, column names, sample values etc.

                  </p>

                  <h3 className="pt-8"> Statistical Data Profiling</h3>
                  <p>
                    Statistical profiling analyzes data characteristics and distributions including:<br/>

                    <div>
                      <ul>
                        <li>Column data types</li>
                        <li>Value patterns and ranges</li>
                        <li>Null values and uniqueness</li>
                        <li>Distinct values and cardinality</li>
                        <li>Min, max, mean, mode, variance etc.</li>
                      </ul>
                    </div>
                    This provides useful descriptive stats and helps identify potential anomalies.

                    For example, plotting value distributions in Python helps visualize profiling:
                    <div className="flex flex-wrap gap-5">
                      <Image
                          src={"/images/blog/data_profiliing_code_2.png"}
                          width={350}
                          height={200}
                          alt="image"
                      />
                    </div>
                    The graph highlights skews, gaps, frequent values etc.
                  </p>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
