import { useTranslation } from "react-i18next";

const Back = () => {
  const { t } = useTranslation("download");

  return (
    <div className="entry-content">
      <div className="wp-block-buttons padding-top-30 margin-bottom-15">
        <div className="wp-block-button has-custom-width wp-block-button__width-100">
          <a href="#!" className="wp-block-button__link clickable">
            <i className="material-icons">
              <svg
                className="icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M14.91 6.71c-.39-.39-1.02-.39-1.41 0L8.91 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41z" />
              </svg>
            </i>{" "}
            {t("download:BackToThePost")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Back;
