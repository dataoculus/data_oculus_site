import dynamic from "next/dynamic";
import 'swagger-ui-react/swagger-ui.css'

const DynamicSwaggerUI = dynamic(() => import("swagger-ui-react"), {
  ssr: false,
  loading: () => <p>Loading Component...</p>,
});

export default function ApiDoc() {
 

  return (
    <div className="container mx-auto p-4">
      <DynamicSwaggerUI 
        url="http://127.0.0.1:3001/api/docs" 
        tryItOutEnabled={true} 
        withCredentials={true}
     
      />
    </div>
  );
} 