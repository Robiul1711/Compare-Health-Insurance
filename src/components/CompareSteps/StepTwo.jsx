import React from "react";
import { Building2, Heart } from "lucide-react";
import { LiaToothSolid } from "react-icons/lia";
import Title from "../common/Title";
import { useFormContext } from "react-hook-form";

const StepTwo = () => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  // RHF watched values
  const selectedCoverage = watch("insurance_cover", "");
  const selectedProcedures = watch("procedure", []);

  // Coverage Options
  const coverageOptions = [
    { id: "hospital", title: "Hospital Cover", subtitle: "For private hospitals and doctors", icon: Building2 },
    { id: "extras", title: "Extras Cover", subtitle: "For dental, glasses, and physio", icon: Heart },
    { id: "both", title: "Hospital + Extras", subtitle: "Both hospital and extras", icon: LiaToothSolid },
  ];

  // Lists
  const hospitalProcedures = [
    { id: 'rehabilitation', label: 'Rehabilitation' },
    { id: 'ear-nose-throat', label: 'Ear, nose and throat' },
    { id: 'palliative-care', label: 'Palliative care' },
    { id: 'brain-nervous', label: 'Brain and nervous system' },
    { id: 'podiatric-surgery', label: 'Podiatric surgery\n(provided by a\nregistered podiatric\nsurgeon)' },
    { id: 'kidney-bladder', label: 'Kidney and bladder' },
    { id: 'hospital-psychiatric', label: 'Hospital psychiatric services' },
    { id: 'bone-joint', label: 'Bone, joint and muscle' },
    { id: 'diabetes', label: 'Diabetes management\n(excluding insulin\npumps)' },
    { id: 'weight-loss', label: 'Weight loss surgery' },
    { id: 'tonsils-adenoids', label: 'Tonsils, adenoids and grommets' },
    { id: 'digestive', label: 'Digestive system' },
    { id: 'eye', label: 'Eye (not cataracts)' },
    { id: 'male-reproductive', label: 'Male reproductive system' },
    { id: 'fertility', label: 'Fertility Treatment' },
    { id: 'plastic-reconstructive', label: 'Plastic and reconstructive surgery (medically necessary)' },
    { id: 'joint-reconstructions', label: 'Joint reconstructions' },
    { id: 'gastrointestinal', label: 'Gastrointestinal endoscopy' },
    { id: 'miscarriage', label: 'Miscarriage and termination of pregnancy' },
    { id: 'chemotherapy', label: 'Chemotherapy, radiotherapy and immunotherapy for cancer' },
    { id: 'lung-chest', label: 'Lung and chest' },
    { id: 'pain-management', label: 'Pain management' },
    { id: 'dialysis', label: 'Dialysis for chronic kidney failure' },
    { id: 'breast-surgery', label: 'Breast surgery (medically necessary)' },
    { id: 'skin', label: 'Skin' },
    { id: 'blood', label: 'Blood' },
    { id: 'hearing-devices', label: 'Implantation of hearing devices' },
    { id: 'assisted-reproductive', label: 'Assisted reproductive services' },
    { id: 'heart-vascular', label: 'Heart and vascular system' },
    { id: 'gynaecology', label: 'Gynaecology' },
    { id: 'back-neck-spine', label: 'Back, neck and spine' },
    { id: 'cataracts', label: 'Cataracts' },
    { id: 'insulin-pumps', label: 'Insulin pumps' },
    { id: 'hernia-appendix', label: 'Hernia and appendix' },
    { id: 'joint-replacements', label: 'Joint replacements' },
    { id: 'sleep-studies', label: 'Sleep studies' },
    { id: 'dental-surgery', label: 'Dental surgery' },
    { id: 'pregnancy-birth', label: 'Pregnancy and birth' },
    { id: 'pain-device', label: 'Pain management with device' },
  ];

const extrasProcedures = [
  { id: 'general-dental', label: 'General Dental' },
  { id: 'optical', label: 'Optical' },
  { id: 'acupuncture', label: 'Acupuncture' },
  { id: 'dietetics', label: 'Dietetics' },
  { id: 'major-dental', label: 'Major Dental' },
  { id: 'physiotherapy', label: 'Physiotherapy' },
  { id: 'podiatry', label: 'Podiatry' },
  { id: 'health-aids-appliance', label: 'Health Aids & Appliance' },
  { id: 'orthodontic', label: 'Orthodontic' },
  { id: 'remedial-massage', label: 'Remedial Massage' },
  { id: 'orthotics', label: 'Orthotics' },
  { id: 'psychology', label: 'Psychology' },
  { id: 'endodontic', label: 'Endodontic' },
  { id: 'chiropractic', label: 'Chiropractic' },
  { id: 'hearing-aids', label: 'Hearing Aids' },
  { id: 'non-pbs-pharmaceuticals', label: 'Non PBS Pharmaceuticals' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'eye-therapy', label: 'Eye Therapy' },
  { id: 'occupational-therapy', label: 'Occupational Therapy' },
  { id: 'speech-therapy', label: 'Speech Therapy' },
];


  // Select insurance type
  const handleCoverageSelect = (coverageId) => {
    setValue("insurance_cover", coverageId, { shouldValidate: true });
    setValue("procedure", []); // reset procedure list
  };

  // Toggle the procedure list
  const toggleProcedure = (procedureId) => {
    let updated = [];

    if (selectedProcedures.includes(procedureId)) {
      updated = selectedProcedures.filter((id) => id !== procedureId);
    } else {
      updated = [...selectedProcedures, procedureId];
    }

    setValue("procedure", updated, { shouldValidate: true });
  };

  const showHospital = selectedCoverage === "hospital" || selectedCoverage === "both";
  const showExtras = selectedCoverage === "extras" || selectedCoverage === "both";

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-6 sm:mb-12">
          <Title level="title48">What do you want your insurance to cover?</Title>
          <p className="text-gray-600">We'll match you with suitable plans.</p>

          {/* ERROR for insurance_cover */}
          {errors.insurance_cover && (
            <p className="text-red-500 mt-2">{errors.insurance_cover.message}</p>
          )}
        </div>

        {/* Coverage Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {coverageOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedCoverage === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleCoverageSelect(option.id)}
                className={`p-6 rounded-2xl border-2 transition duration-300 ${
                  isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white hover:border-blue-300"
                }`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center 
                  ${isSelected ? "bg-blue-100" : "bg-gray-100"}`}>
                  <Icon className={`w-8 h-8 ${isSelected ? "text-blue-600" : "text-gray-600"}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{option.title}</h3>
                <p className="text-sm text-gray-600">{option.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Hospital Procedures */}
        {showHospital && (
          <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Hospital Procedures</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {hospitalProcedures.map((p) => {
                const isSelected = selectedProcedures.includes(p.id);

                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => toggleProcedure(p.id)}
                    className={`p-4 border-2 rounded-lg text-left transition 
                      ${isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"}`}
                  >
                    <span className="text-gray-700">{p.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Extras Procedures */}
        {showExtras && (
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Extras Procedures</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {extrasProcedures.map((p) => {
                const isSelected = selectedProcedures.includes(p.id);

                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => toggleProcedure(p.id)}
                    className={`p-4 border-2 rounded-lg text-left transition 
                      ${isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"}`}
                  >
                    <span className="text-gray-700">{p.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ERROR for procedure */}
        {errors.procedure && (
          <p className="text-red-500 text-center mt-4">{errors.procedure.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepTwo;
