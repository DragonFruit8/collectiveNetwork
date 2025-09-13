import { useState } from "react";
import PageHeader from "../components/PageHeader";
// import FamilyForm from "../forms/FamilyForm";

const CampaignForm = () => {
  const [formData, setFormData] = useState({
    organizer: "",
    email: "",
    campaignFamily: "",
    socialLink: "",
    instagram: "",
    isCampaign: false,
    shortcode: "",
    campaignPhoto: [],
    raised: "",
    fundGoal: "",
    personalStory: "",
  });
  const [validate, setValidate] = useState({
    organizer: false,
    email: false,
    campaignFamily: false,
    socialLink: false,
    instagram: false,
    shortcode: false,
    raised: false,
    fundGoal: false,
    campaignPhoto: false,
    personalStory: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function clearForm(event) {
    console.log(event.name)
    setFormData({
      organizer: "",
      email: "",
      campaignFamily: "",
      socialLink: "",
      instagram: "",
      isCampaign: false,
      shortcode: "",
      campaignPhoto: [],
      raised: "",
      fundGoal: "",
      personalStory: "",
    });
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const newValidate = { ...validate };

    if (!formData.organizer) {
      newErrors.organizer = "organizer is required | المنظم مطلوب";
      newValidate.organizer = true;
    } else {
      newValidate.organizer = false;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email =
        " يرجى إدخال عنوان بريد إلكتروني صحيح |\n Please enter a valid email address";
      newValidate.email = true;
    } else {
      newValidate.email = false;
    }

    if (!formData.campaignFamily) {
      newErrors.campaignFamily =
        " سم العائلة مطلوب |\n Family Name is required";
      newValidate.campaignFamily = true;
    } else {
      newValidate.campaignFamily = false;
    }

    if (!formData.socialLink) {
      newErrors.socialLink = "رابط تيك توك مطلوب |\n TikTok URL is required";
      newValidate.socialLink = true;
    } else {
      newValidate.socialLink = false;
    }

    if (!formData.shortcode) {
      newErrors.shortcode =
        "رابط/رمز التمويل الجماعي مطلوب |\n Crowdfund Shortcode/Link is required";
      newValidate.shortcode = true;
    } else {
      newValidate.shortcode = false;
    }

    if (!formData.fundGoal) {
      newErrors.fundGoal =
        "الهدف الإجمالي لجمع التبرعات مطلوب |\n Fundraiser Total Goal is required";
      newValidate.fundGoal = true;
    } else {
      newValidate.fundGoal = false;
    }

    setErrors(newErrors);
    setValidate(newValidate);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Handle form submission
      //   if (campaignForm.onSubmit) {
      //     await campaignForm.onSubmit(formData);
      //   }
      console.log("Form submitted successfully:", formData);
      setFormData("");
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title={"Family Submission Form"}
        subTitle={" استمارة تقديم العائلة"}
        slogan={"Enter a Familiy's Campaign"}
        tranSlogan={" إدخال حملة العائلة"}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12">
            <div className="card shadow-lg">
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  <h2 className="h3 fw-bold text-dark mb-4">
                    Family Campaign Form | نموذج حملة العائلة
                  </h2>

                  <div className="mb-3">
                    <label htmlFor="organizer" className="form-label fw-medium">
                      Organizer | المنظم
                      <span className="text-danger">* required ( مطلوب) </span>
                    </label>
                    <input
                      type="text"
                      id="organizer"
                      name="organizer"
                      value={formData.organizer}
                      onChange={handleInputChange}
                      placeholder="Organizer Name"
                      className={`form-control form-control-lg ${
                        validate.organizer ? "text-danger border-danger" : ""
                      }`}
                      //   required={true}
                    />
                    {errors.organizer && (
                      <div className="text-danger small mt-1">
                        {errors.organizer}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-medium">
                      Organizer's Email | بريد المنظم الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Organizer Email"
                      className={`form-control form-control-lg ${
                        validate.email ? "text-danger border-danger" : ""
                      }`}
                      required={false}
                    />
                    {errors.email && (
                      <div className="text-danger small mt-1">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="campaignFamily"
                      className="form-label fw-medium"
                    >
                      Family Name | اسم العائلة
                      <span className="text-danger">* required ( مطلوب) </span>
                    </label>
                    <input
                      type="text"
                      id="campaignFamily"
                      name="campaignFamily"
                      value={formData.campaignFamily}
                      onChange={handleInputChange}
                      placeholder="Gaza Family"
                      className={`form-control form-control-lg ${
                        validate.campaignFamily
                          ? "text-danger border-danger"
                          : ""
                      }`}
                      //   required={true}
                    />
                    {errors.campaignFamily && (
                      <div className="text-danger small mt-1">
                        {errors.campaignFamily}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="socialLink"
                      className="form-label fw-medium"
                    >
                      TikTok Link | رابط تيك توك
                      <span className="text-danger">* required ( مطلوب) </span>
                    </label>
                    <input
                      type="url"
                      id="socialLink"
                      name="socialLink"
                      value={formData.socialLink}
                      onChange={handleInputChange}
                      placeholder="https://www.tiktok.com/@gazafamily"
                      className={`form-control form-control-lg ${
                        validate.socialLink ? "text-danger border-danger" : ""
                      }`}
                      //   required={true}
                    />
                    {errors.socialLink && (
                      <div className="text-danger small mt-1">
                        {errors.socialLink}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="instagram" className="form-label fw-medium">
                      Instagram ( Username ) | إنستغرام (اسم المستخدم)
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleInputChange}
                      placeholder="Instagram username"
                      className={`form-control form-control-lg ${
                        validate.instagram ? "text-danger border-danger" : ""
                      }`}
                      required={false}
                    />
                    {errors.instagram && (
                      <div className="text-danger small mt-1">
                        {errors.instagram}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-medium">
                      Campaign Created | تم إنشاء الحملة
                    </label>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="isCampaign"
                        name="isCampaign"
                        checked={formData.isCampaign}
                        onSubmit={(event) => handleSubmit(event)}
                        onChange={handleInputChange}
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="isCampaign">
                        Campaign Create" | تم إنشاء dالحerrors.isCampaign ?
                        'text-danger border-danger' : ''لة
                      </label>
                    </div>
                    {errors.isCampaign && (
                      <div className="text-danger small mt-1">
                        {errors.isCampaign}
                      </div>
                    )}
                  </div>
                  {formData.isCampaign && formData.isCampaign ? (
                    <>
                      <div className="mb-3">
                        <label
                          htmlFor="shortcode"
                          className="form-label fw-medium"
                        >
                          Crowdfund Shortcode/Link | رابط/رمز التمويل الجماعي
                          <span className="text-danger">
                            * required ( مطلوب)
                          </span>
                        </label>
                        <input
                          type="url"
                          id="shortcode"
                          name="shortcode"
                          value={formData.shortcode}
                          onChange={handleInputChange}
                          placeholder="https://gofundme.com/e3s03824"
                          className={`form-control form-control-lg ${
                            validate.shortcode
                              ? "text-danger border-danger"
                              : ""
                          }`}
                          //   required={true}
                        />
                        {errors.shortcode && (
                          <div className="text-danger small mt-1">
                            {errors.shortcode}
                          </div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="raised"
                          className="form-label fw-medium"
                        >
                          Amount Raised | المبلغ المُجمع
                        </label>
                        <input
                          type="number"
                          id="raised"
                          name="raised"
                          value={formData.raised}
                          onChange={handleInputChange}
                          placeholder="$100"
                          className={`form-control form-control-lg ${
                            validate.raised ? "text-danger border-danger" : ""
                          }`}
                          required={false}
                        />
                        {errors.raised && (
                          <div className="text-danger small mt-1">
                            {errors.raised}
                          </div>
                        )}
                      </div>
                    </>
                  ) : null}

                  <div className="mb-3">
                    <label htmlFor="fundGoal" className="form-label fw-medium">
                      Fundraiser Total Goal | الهدف الإجمالي لجمع التبرعات
                      <span className="text-danger">* required ( مطلوب) </span>
                    </label>
                    <input
                      type="number"
                      id="fundGoal"
                      name="fundGoal"
                      value={formData.fundGoal}
                      onChange={handleInputChange}
                      placeholder="$50,000"
                      className={`form-control form-control-lg ${
                        validate.fundGoal ? "text-danger border-danger" : ""
                      }`}
                      //   required={true}
                    />
                    {errors.fundGoal && (
                      <div className="text-danger small mt-1">
                        {errors.fundGoal}
                      </div>
                    )}
                  </div>
                  {formData.isCampaign ? (
                    <div className="mb-3">
                      <label
                        htmlFor="campaignPhoto"
                        className="form-label fw-medium"
                      >
                        Family's Photo | صورة العائلة
                      </label>
                      {/*  <input
                        type="file"
                        id="campaignPhoto"
                        name="campaignPhoto"
                        value={formData.campaignPhoto}
                        onChange={handleInputChange}
                        className={`form-control form-control-lg ${
                          validate.campaignPhoto
                            ? "text-danger border-danger"
                            : ""
                        }`}
                        required={false}
                      /> */}
                      {errors.campaignPhoto && (
                        <div className="text-danger small mt-1">
                          {errors.campaignPhoto}
                        </div>
                      )}
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      htmlFor="personalStory"
                      className="form-label fw-medium"
                    >
                      Personal Story | القصة الشخصية
                    </label>
                    <input
                      type="text"
                      id="personalStory"
                      name="personalStory"
                      value={formData.personalStory}
                      onChange={handleInputChange}
                      placeholder="احك لنا قصتك... / شاركنا قصتك... ( Tell us your story... )"
                      className={`form-control form-control-lg ${
                        validate.personalStory
                          ? "text-danger border-danger"
                          : ""
                      }`}
                      required={false}
                    />
                    {errors.personalStory && (
                      <div className="text-danger small mt-1">
                        {errors.personalStory}
                      </div>
                    )}
                  </div>
                  {/* <div className="mb-4">
                    <FamilyForm />
                  </div> */}

                  <div className="d-flex gap-5">
                    <button
                      type="button"
                      className="col btn btn-warning btn-lg fw-semibold"
                      onClick={clearForm}
                    >
                      {" "}
                      Clear Form
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="col btn btn-primary btn-lg fw-semibold"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Form"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignForm;
