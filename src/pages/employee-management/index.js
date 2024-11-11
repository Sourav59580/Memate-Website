import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/employee-management";
import NextStep from "../../components/next-step";
import { Helmet } from "react-helmet";

const EmployeeManagementPage = () => {
  return (
    <>
      <Helmet>
    <title>Supplier Management | MeMate Features and Pricing Insights</title>
    <meta property="og:title" content="Supplier Management | MeMate Features and Pricing Insights" />
      <meta property="og:description" content="Discover MeMate&#39;s Supplier Management features, designed to streamline
supplier relations, optimise procurement, and provide transparent pricing insights.
    " />
</Helmet>
    <Layout>
      <SalesComponent />
      <SalesComponentFeature />
      <SmartInvestment />
      <QuestionAnswer />
      <NextStep text="Request a Demo"/>
    </Layout>
    </>
  );
};

export default EmployeeManagementPage;
