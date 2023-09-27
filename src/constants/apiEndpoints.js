// import { logoImage } from '../assets';

export const API_ENDPOINT_BASE_URL = 'https://api.jobvritta.com/api';
// export const APP_CLIENT_LOGO = logoImage;


export const BUILD_VARIANT = 'PRODUCTION'
export const APP_VERSION = '1.0.1'

export const API_ENDPOINTS = {
  BASE: API_ENDPOINT_BASE_URL,
  LOGIN: API_ENDPOINT_BASE_URL + "/User_Mast/login",

  BranchRequirement: API_ENDPOINT_BASE_URL + "/Dashboard/requirement",
  BranchRequirementDayWise: API_ENDPOINT_BASE_URL + "/Dashboard/requirementDayWise",
  BranchECI: API_ENDPOINT_BASE_URL + "/dashboard/eci",
  BranchECIDayWise: API_ENDPOINT_BASE_URL + "/Dashboard/eciDayWise",
  BranchMargin: API_ENDPOINT_BASE_URL + "/Dashboard/margin",
  BranchMarginDayWise: API_ENDPOINT_BASE_URL + "/Dashboard/marginDayWise",
  BranchSubmission: API_ENDPOINT_BASE_URL + "/Dashboard/submission",
  BranchSubmissionDayWise: API_ENDPOINT_BASE_URL + "/Dashboard/submissionDayWise",
  BranchPO: API_ENDPOINT_BASE_URL + "/Dashboard/po",
  BranchPODayWise: API_ENDPOINT_BASE_URL + "/Dashboard/poDayWise",

  CompanyRequirement: API_ENDPOINT_BASE_URL + "/Dashboard/requirementCompany",
  CompanyRequirementDayWise: API_ENDPOINT_BASE_URL + "/Dashboard/requirementCompanyDayWise",
  CompanyECI: API_ENDPOINT_BASE_URL + "/dashboard/eciCompany",
  CompanyECIDayWise: API_ENDPOINT_BASE_URL + "/dashboard/eciCompanyDayWise",
  CompanyMargin: API_ENDPOINT_BASE_URL + "/Dashboard/marginCompany",
  CompanyMarginDayWise: API_ENDPOINT_BASE_URL + "/Dashboard/marginCompanyDayWise",
  CompanyPO: API_ENDPOINT_BASE_URL + "/Dashboard/poCompany",
  CompanyPODayWise: API_ENDPOINT_BASE_URL + "/Dashboard/poCompanyDayWise",
  CompanySubmission: API_ENDPOINT_BASE_URL + "/Dashboard/submissionCompany",
  CompanySubmissionDayWise: API_ENDPOINT_BASE_URL + "/Dashboard/submissionCompanyDayWise",

  Allocate: API_ENDPOINT_BASE_URL + "/Requirement_MAST?filter=undefined&tb=1",
  AllocateReqID: API_ENDPOINT_BASE_URL + "/AllocateRequirement_mast",
  nullsss: API_ENDPOINT_BASE_URL + "/null",
  AllocateRequirement: API_ENDPOINT_BASE_URL + "/AllocateRequirement_mast?requirement_id=",
  
  Voting: API_ENDPOINT_BASE_URL + "/voting_questions",
  Question: API_ENDPOINT_BASE_URL + "/Voting_Questions/queDetails?que_id=",
  Answer: API_ENDPOINT_BASE_URL + "/Voting_Questions/addAnswer",
  ViewAllAns: API_ENDPOINT_BASE_URL + "/Voting_Questions/listAnswer?que_id=",


  
  // UserList: API_ENDPOINT_BASE_URL + "/User_Mast?lazyParams={"first":0,"rows":25,"page":${page},"sortField":"login_ID","sortOrder":-1}&filter=null",
  DropDownCompanyList: API_ENDPOINT_BASE_URL + "/Dropdown/company?null=",
  DropDownBranchList: API_ENDPOINT_BASE_URL + "/Dropdown/branches?null=",
  DropDownRoleList: API_ENDPOINT_BASE_URL + "/Dropdown/roles?null=",
  UserSubmitss: API_ENDPOINT_BASE_URL + "/User_Mast?roles=www",
  UserSubmit: API_ENDPOINT_BASE_URL + "/User_Mast?roles=",
  
  LOGOUT: API_ENDPOINT_BASE_URL + "/v1/api/logout",
  FORGET_PASSWORD: API_ENDPOINT_BASE_URL + "/v1/account/sendForgotPwd",
};



