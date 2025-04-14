"use client";
import React, { useState } from "react";

export const WorkerAssistantPage = () => {
  // Dummy data for worker
  const worker = {
    display_name: "محمد أحمد",
  };

  // State for form question and answer
  const [question, setQuestionValue] = useState("");
  const [answer, setAnswer] = useState("");
  const [formErrors, setFormErrors] = useState<string[]>([]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() === "") {
      setFormErrors(["الرجاء إدخال سؤالك"]);
      return;
    }
    // Dummy response - in a real app, this would come from an API call
    setAnswer(
      "هذه إجابة توضيحية للسؤال. في التطبيق الحقيقي، ستأتي الإجابة من خدمة الذكاء الاصطناعي بناءً على السؤال المطروح."
    );
    setFormErrors([]);
  };

  // Function to set predefined questions
  const setQuestion = (q: string) => {
    setQuestionValue(q);
    document.getElementById("questionInput")?.focus();
  };

  return (
    <div className="container">
      <div className="ai-header bg-gradient-to-r from-[#0056b3] via-[#0077cc] to-[#00c3ff]">
        <div className="robot-icon">
          <i className="bi bi-robot"></i>
        </div>
        <span className="user-greeting">
          <i className="bi bi-person-check-fill"></i> مرحباً{" "}
          {worker.display_name}
        </span>
        <h1>المساعد الذكي الشخصي</h1>
        <p>
          أنا مساعدك الذكي الشخصي، هنا لمساعدتك في جميع استفساراتك المتعلقة
          بالعمل والقوانين والحقوق العمالية في المملكة العربية السعودية. يمكنك
          طرح أي سؤال وسأقدم لك إجابات دقيقة ومفيدة.
        </p>
      </div>

      <div className="ai-assistant-container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="mb-4">
              <i className="bi bi-chat-dots-fill"></i> اسأل المساعد الذكي
            </h2>
            <p className="mb-4">
              يمكنك طرح أي سؤال حول حقوقك وواجباتك والقوانين المتعلقة بالعمل في
              المملكة العربية السعودية. سأقدم لك إجابات دقيقة ومفصلة مع
              الاستشهاد بالمواد القانونية ذات الصلة عند الإمكان.
            </p>

            <div className="question-form">
              <form onSubmit={handleSubmit} id="questionForm">
                <div className="form-group">
                  <textarea
                    id="questionInput"
                    className="form-control"
                    rows={3}
                    placeholder="اكتب سؤالك هنا... مثال: ما هي حقوقي كعامل في المملكة العربية السعودية؟"
                    value={question}
                    onChange={(e) => setQuestionValue(e.target.value)}
                  />
                  {formErrors.length > 0 && (
                    <div className="errors mt-2">
                      {formErrors.map((error, index) => (
                        <span key={index}>{error}</span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="form-group mt-3 text-center">
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-send"></i> إرسال السؤال
                  </button>
                </div>
              </form>
            </div>

            {answer && (
              <div className="answer-container">
                <h3>
                  <i className="bi bi-chat-square-text"></i> الإجابة
                </h3>
                <div
                  className="answer"
                  dangerouslySetInnerHTML={{ __html: answer }}
                ></div>
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <div className="suggested-questions">
              <h3>
                <i className="bi bi-lightbulb"></i> أسئلة مقترحة
              </h3>
              <button
                type="button"
                className="question-btn"
                onClick={() =>
                  setQuestion("ما هي حقوقي كعامل في المملكة العربية السعودية؟")
                }
              >
                ما هي حقوقي كعامل في المملكة؟
              </button>
              <button
                type="button"
                className="question-btn"
                onClick={() =>
                  setQuestion(
                    "كم عدد ساعات العمل المسموح بها قانونياً في اليوم؟"
                  )
                }
              >
                كم عدد ساعات العمل المسموح بها؟
              </button>
              <button
                type="button"
                className="question-btn"
                onClick={() =>
                  setQuestion("ما هي أنواع الإجازات التي يحق لي الحصول عليها؟")
                }
              >
                ما هي أنواع الإجازات المتاحة؟
              </button>
              <button
                type="button"
                className="question-btn"
                onClick={() =>
                  setQuestion(
                    "ما هي إجراءات السلامة المهنية التي يجب توفيرها في مكان العمل؟"
                  )
                }
              >
                إجراءات السلامة المهنية؟
              </button>
              <button
                type="button"
                className="question-btn"
                onClick={() =>
                  setQuestion("كيف يمكنني تقديم شكوى ضد صاحب العمل؟")
                }
              >
                كيفية تقديم شكوى ضد صاحب العمل؟
              </button>
            </div>
          </div>
        </div>

        <h2 className="mt-5 mb-4">
          <i className="bi bi-grid-3x3-gap-fill"></i> استكشف المواضيع
        </h2>

        <div className="category-cards">
          <div
            className="category-card"
            onClick={() =>
              setQuestion(
                "ما هي حقوقي وواجباتي كعامل في المملكة العربية السعودية؟"
              )
            }
          >
            <div className="icon">
              <i className="bi bi-shield-check"></i>
            </div>
            <h3>الحقوق والواجبات</h3>
            <p>تعرف على حقوقك وواجباتك الأساسية كعامل</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              setQuestion(
                "ما هي قوانين ساعات العمل والإجازات في نظام العمل السعودي؟"
              )
            }
          >
            <div className="icon">
              <i className="bi bi-calendar-check"></i>
            </div>
            <h3>ساعات العمل والإجازات</h3>
            <p>معلومات عن ساعات العمل وأنواع الإجازات</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              setQuestion("ما هي حقوقي في الأجور والمكافآت والتعويضات؟")
            }
          >
            <div className="icon">
              <i className="bi bi-cash-coin"></i>
            </div>
            <h3>الأجور والتعويضات</h3>
            <p>معلومات عن الرواتب والمكافآت والتعويضات</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              setQuestion(
                "ما هي إجراءات الصحة والسلامة المهنية التي يجب توفيرها في مكان العمل؟"
              )
            }
          >
            <div className="icon">
              <i className="bi bi-bandaid"></i>
            </div>
            <h3>الصحة والسلامة المهنية</h3>
            <p>معلومات عن إجراءات السلامة وحقوقك</p>
          </div>
        </div>

        <h2 className="mt-5 mb-4">
          <i className="bi bi-stars"></i> مميزات المساعد الذكي
        </h2>

        <div className="ai-features">
          <div className="feature-card">
            <div className="icon">
              <i className="bi bi-book"></i>
            </div>
            <h3>معلومات قانونية دقيقة</h3>
            <p>
              يقدم المساعد الذكي معلومات دقيقة ومحدثة حول قوانين العمل في
              المملكة العربية السعودية، مع الاستشهاد بالمواد القانونية ذات
              الصلة.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">
              <i className="bi bi-clock-history"></i>
            </div>
            <h3>متاح على مدار الساعة</h3>
            <p>
              يمكنك الوصول إلى المساعد الذكي في أي وقت ومن أي مكان للحصول على
              إجابات فورية لاستفساراتك المتعلقة بالعمل.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">
              <i className="bi bi-translate"></i>
            </div>
            <h3>دعم متعدد اللغات</h3>
            <p>
              يمكن للمساعد الذكي فهم استفساراتك والرد عليها باللغة العربية
              والإنجليزية، مما يسهل التواصل لجميع العمال.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
