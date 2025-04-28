import React, { useState } from 'react';
import { MapPin, Calendar, Clock, AlertTriangle, Upload, Send } from 'lucide-react';

const ReportCrime: React.FC = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    crimeType: '',
    date: '',
    time: '',
    location: '',
    description: '',
    evidenceDescription: '',
    witnessName: '',
    witnessContact: '',
    reporterName: '',
    reporterContact: '',
    reporterEmail: '',
    anonymous: false,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };
  
  const nextStep = () => {
    setFormStep(formStep + 1);
  };
  
  const prevStep = () => {
    setFormStep(formStep - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Show success message
    setFormStep(4);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold text-white mb-6">Report a Crime</h1>
      
      <div className="bg-gray-900 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 1 ? 'bg-blue-600' : 'bg-gray-700'}`}>
              <AlertTriangle className={`h-5 w-5 ${formStep >= 1 ? 'text-white' : 'text-gray-400'}`} />
            </div>
            <div className={`ml-3 ${formStep >= 1 ? 'text-white' : 'text-gray-400'}`}>
              <div className="text-sm font-medium">Step 1</div>
              <div className="text-xs">Incident Details</div>
            </div>
          </div>
          
          <div className={`flex-1 h-0.5 mx-4 ${formStep >= 2 ? 'bg-blue-600' : 'bg-gray-700'}`}></div>
          
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 2 ? 'bg-blue-600' : 'bg-gray-700'}`}>
              <Upload className={`h-5 w-5 ${formStep >= 2 ? 'text-white' : 'text-gray-400'}`} />
            </div>
            <div className={`ml-3 ${formStep >= 2 ? 'text-white' : 'text-gray-400'}`}>
              <div className="text-sm font-medium">Step 2</div>
              <div className="text-xs">Evidence & Witnesses</div>
            </div>
          </div>
          
          <div className={`flex-1 h-0.5 mx-4 ${formStep >= 3 ? 'bg-blue-600' : 'bg-gray-700'}`}></div>
          
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 3 ? 'bg-blue-600' : 'bg-gray-700'}`}>
              <Send className={`h-5 w-5 ${formStep >= 3 ? 'text-white' : 'text-gray-400'}`} />
            </div>
            <div className={`ml-3 ${formStep >= 3 ? 'text-white' : 'text-gray-400'}`}>
              <div className="text-sm font-medium">Step 3</div>
              <div className="text-xs">Your Information</div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {formStep === 1 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="crimeType" className="block text-sm font-medium text-gray-300 mb-1">
                  Type of Crime
                </label>
                <select
                  id="crimeType"
                  name="crimeType"
                  value={formData.crimeType}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select crime type</option>
                  <option value="theft">Theft</option>
                  <option value="assault">Assault</option>
                  <option value="burglary">Burglary</option>
                  <option value="robbery">Robbery</option>
                  <option value="fraud">Fraud</option>
                  <option value="vandalism">Vandalism</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
                    Date of Incident
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border-gray-700 rounded-md py-2 pl-10 pr-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-1">
                    Time of Incident
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border-gray-700 rounded-md py-2 pl-10 pr-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
                  Location of Incident
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Enter the address or location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border-gray-700 rounded-md py-2 pl-10 pr-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                  Incident Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  placeholder="Please provide a detailed description of what happened..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          
          {formStep === 2 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="evidenceDescription" className="block text-sm font-medium text-gray-300 mb-1">
                  Evidence Description
                </label>
                <textarea
                  id="evidenceDescription"
                  name="evidenceDescription"
                  rows={3}
                  placeholder="Describe any evidence that might help with the investigation..."
                  value={formData.evidenceDescription}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <div className="border-2 border-dashed border-gray-700 rounded-md p-6">
                <div className="text-center">
                  <Upload className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">
                    Drag and drop files here, or click to select files
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Support for images, videos, audio, documents (max 10MB each)
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    multiple
                  />
                  <button
                    type="button"
                    className="mt-4 px-4 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Select Files
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="witnessName" className="block text-sm font-medium text-gray-300 mb-1">
                    Witness Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="witnessName"
                    name="witnessName"
                    placeholder="Full name of witness"
                    value={formData.witnessName}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="witnessContact" className="block text-sm font-medium text-gray-300 mb-1">
                    Witness Contact (Optional)
                  </label>
                  <input
                    type="text"
                    id="witnessContact"
                    name="witnessContact"
                    placeholder="Phone or email"
                    value={formData.witnessContact}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          
          {formStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <input
                  id="anonymous"
                  name="anonymous"
                  type="checkbox"
                  checked={formData.anonymous}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded"
                />
                <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-300">
                  Submit this report anonymously
                </label>
              </div>
              
              {!formData.anonymous && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="reporterName" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="reporterName"
                        name="reporterName"
                        placeholder="Full name"
                        value={formData.reporterName}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required={!formData.anonymous}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="reporterContact" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="reporterContact"
                        name="reporterContact"
                        placeholder="Your contact number"
                        value={formData.reporterContact}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required={!formData.anonymous}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="reporterEmail" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="reporterEmail"
                      name="reporterEmail"
                      placeholder="Your email address"
                      value={formData.reporterEmail}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required={!formData.anonymous}
                    />
                  </div>
                </>
              )}
              
              <div className="bg-gray-800 p-4 rounded-md">
                <h3 className="text-white text-sm font-medium mb-2">Important Information</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  By submitting this report, you confirm that the information provided is true and accurate to the best of your knowledge. False reporting is a serious offense and may lead to legal consequences. Your information will be kept confidential and will only be used for investigation purposes.
                </p>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Submit Report
                </button>
              </div>
            </div>
          )}
          
          {formStep === 4 && (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-600/20 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Report Submitted Successfully</h2>
              <p className="text-gray-400 mb-6">
                Your report has been submitted and will be reviewed by our team. 
                {!formData.anonymous && " You will receive a confirmation at the provided email address."}
              </p>
              <div className="bg-gray-800 rounded-md p-4 mb-6 inline-block">
                <p className="text-gray-300 text-sm">Report Reference Number</p>
                <p className="text-xl font-mono text-white tracking-wider">CR-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setFormStep(1);
                    setFormData({
                      crimeType: '',
                      date: '',
                      time: '',
                      location: '',
                      description: '',
                      evidenceDescription: '',
                      witnessName: '',
                      witnessContact: '',
                      reporterName: '',
                      reporterContact: '',
                      reporterEmail: '',
                      anonymous: false,
                    });
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Submit Another Report
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ReportCrime;