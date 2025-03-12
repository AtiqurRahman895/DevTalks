import { Link, useRouteError } from "react-router";
import PageTitle from "../CommonComponents/PageTitle";

const ErrorPage = () => {
  const { error, status, statusText } = useRouteError();
  console.log(error);

  return (
    <>
      <PageTitle title={`${statusText || "Error"}`} />

      <div className="h-lvh place-items-center grid gap-3 content-center bg-white">
        {status === 404 ? (
          <img
            src={'pageNotFound.svg'}
            alt={`Error ${status}: ${statusText}`}
            className="w-[200px]"
          />
        ) : (
          <>
            {/* <h1 className="font-extrabold text-9xl text-custom-primary">!</h1> */}
            <h1 className="text-custom-primary">
              {error?.message || `${status}, ${statusText}`}
            </h1>
          </>
        )}

        <Link
          to={-1}
          className="btn bg-custom-primary hover:bg-custom-half-primary border-none font-bold text-white hover:text-custom-primary"
        >
          Go Back
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
