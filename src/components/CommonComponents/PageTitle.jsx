import { Helmet } from "react-helmet-async";

const PageTitle = ({title}) => {
    return (
        <Helmet>
          <title>{title} | Do Task</title>
        </Helmet>
    );
};

export default PageTitle;