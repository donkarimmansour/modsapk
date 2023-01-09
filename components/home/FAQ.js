import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation("faq")


  // const arr = {}

  // document.querySelectorAll("details").forEach((el, i) => {

  //   if (i < 3) {
  //     arr[`Question${i + 1}`] = el.querySelector("summary").textContent,
  //       arr[`Answer${i + 1}`] = el.querySelector("p")?.textContent

  //   }

  // })

  // console.log(arr)



 

  return (
    <section>
      <div className="container">
        <h2 className="has-medium-font-size uppercase">
          {t("faq:home.Title")}
        </h2>
        <p className="has-text-align-justify">
          {t("faq:home.Desc")}
        </p>
        <div className="wp-block-columns has-text-align-justify">
          <div className="wp-block-column">
            <div className="schema-faq wp-block-yoast-faq-block">

              <details className="schema-faq-section">
                <summary className="schema-faq-question">{t("faq:home.Question1")}</summary>
                <p className="schema-faq-answer">{t("faq:home.Answer1")}</p>
              </details>

              <details className="schema-faq-section">
                <summary className="schema-faq-question">{t("faq:home.Question2")}</summary>
                <p className="schema-faq-answer">{t("faq:home.Answer2")}</p>
              </details>

              <details className="schema-faq-section">
                <summary className="schema-faq-question">{t("faq:home.Question3")}</summary>
                <p className="schema-faq-answer">{t("faq:home.Answer3")}</p>
              </details>
           
           
            </div>
          </div>
          <div className="wp-block-column">
            <div className="schema-faq wp-block-yoast-faq-block">
            
              <details className="schema-faq-section">
                <summary className="schema-faq-question">{t("faq:home.Question4")}</summary>
                <p className="schema-faq-answer">{t("faq:home.Answer4")}</p>
              </details>


              <details className="schema-faq-section">
                <summary className="schema-faq-question">{t("faq:home.Question5")}</summary>
                <p className="schema-faq-answer">{t("faq:home.Answer5")}</p>
              </details>

              <details className="schema-faq-section">
                <summary className="schema-faq-question">{t("faq:home.Question6")}</summary>
                <p className="schema-faq-answer">{t("faq:home.Answer6")}</p>
              </details>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
