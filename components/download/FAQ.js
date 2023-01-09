import { useTranslation } from "react-i18next"

const FAQ = ({type}) => {

  const { t } = useTranslation("faq")

  return (
    <div className="entry-content">

      {type === 'loader' ?
        <h2 className="has-medium-font-size">{t("faq:loader.Title1")}</h2>
        :
        <h2 className="has-medium-font-size">{t("faq:download.Title1")}</h2>
      }

      <div className="schema-faq wp-block-yoast-faq-block">

        {type === 'loader' ?
          <>
            <details className="schema-faq-section">
              <summary className="schema-faq-question">{t("faq:loader.Question1")}</summary>
              <div className="schema-faq-answer">
                <p className="has-text-align-left no-margin">{t("faq:loader.Answer1")}</p>
              </div>
            </details>

            <details className="schema-faq-section">
              <summary className="schema-faq-question">{t("faq:loader.Question2")}</summary>
              <div className="schema-faq-answer">
                <p className="has-text-align-left no-margin">{t("faq:loader.Answer2")}</p>
              </div>
            </details>

            <details className="schema-faq-section">
              <summary className="schema-faq-question">{t("faq:loader.Question3")}</summary>
              <div className="schema-faq-answer">
                <p className="has-text-align-left no-margin">{t("faq:loader.Answer3")}</p>
              </div>
            </details>
          </>
          :
          <>
            <details className="schema-faq-section">
              <summary className="schema-faq-question">{t("faq:download.Question1")}</summary>
              <div className="schema-faq-answer">
                <p className="has-text-align-left no-margin">{t("faq:download.Answer1")}</p>
              </div>
            </details>

            <details className="schema-faq-section">
              <summary className="schema-faq-question">{t("faq:download.Question2")}</summary>
              <div className="schema-faq-answer">
                <p className="has-text-align-left no-margin">{t("faq:download.Answer2")}</p>
              </div>
            </details>

            <details className="schema-faq-section">
              <summary className="schema-faq-question">{t("faq:download.Question3")}</summary>
              <div className="schema-faq-answer">
                <p className="has-text-align-left no-margin">{t("faq:download.Answer3")}</p>
              </div>
            </details>
          </>
        }


    </div>
    <h2 className="has-medium-font-size">{t("faq:download.Title2")}</h2>
    <div className="schema-faq wp-block-yoast-faq-block">

        <details className="schema-faq-section">
          <summary className="schema-faq-question">{t("faq:download.Question4")}</summary>
          <div className="schema-faq-answer">
            <p className="has-text-align-left no-margin">{t("faq:download.Answer4")}</p>
          </div>
        </details>
          
        <details className="schema-faq-section">
          <summary className="schema-faq-question">{t("faq:download.Question5")}</summary>
          <div className="schema-faq-answer">
            <p className="has-text-align-left no-margin">{t("faq:download.Answer5")}</p>
          </div>
        </details>


        <details className="schema-faq-section">
          <summary className="schema-faq-question">{t("faq:download.Question6")}</summary>
          <div className="schema-faq-answer">
            <p className="has-text-align-left no-margin">{t("faq:download.Answer6")}</p>
          </div>
        </details>

        <details className="schema-faq-section">
          <summary className="schema-faq-question">{t("faq:download.Question7")}</summary>
          <div className="schema-faq-answer">
            <p className="has-text-align-left no-margin">{t("faq:download.Answer7")}</p>
          </div>
        </details>


        <details className="schema-faq-section">
          <summary className="schema-faq-question">{t("faq:download.Question8")}</summary>
          <div className="schema-faq-answer">
            <p className="has-text-align-left no-margin">{t("faq:download.Answer8")}</p>
          </div>
        </details>
     

    </div>
  </div>

  )
}

export default FAQ