import pflege from "../../images/works/pflege.png";
import medizin from "../../images/works/medizin.png";
import sozialarbeit from "../../images/works/kids.jpg";
import logistik from "../../images/works/logistic.jpg";
import facility from "../../images/works/uni.jpg";
import sanitär from "../../images/works/plumber.jpg";
import automechanik from "../../images/works/auto-rep.jpg";

export const industriesData = [
  {
    title: "pflege",
    image: pflege,
    alt: "care photo",
    description: "pflegeText",
    tabletText: "pflegeText",
    mobileText: "pflegeMobileText",
    tabletSubText: "pflegeJobText",
    list: [
      "pflegeJobList1",
      "pflegeJobList2",
      "pflegeJobList3",
      "pflegeJobList4",
      // "pflegeJobList5",
      // "pflegeJobList6",
      // "pflegeJobList7",
    ],
    text: "deText",
    subcategories: [
      {
        title: "subTitlePflege1",
        list: ["subTitlePflegeList1_1", "subTitlePflegeList1_2"],
      },
      {
        title: "subTitlePflege2",
        list: [
          "subTitleListPflege2_1",
          "subTitleListPflege2_2",
          "subTitleListPflege2_3",
        ],
      },
      // { title: "subTitlePflege3" },
      // {
      //   title: "subTitlePflege3_1",
      //   list: ["subTitleListPflege3_1", "subTitleListPflege3_2"],
      // },
      // {
      //   title: "subTitlePflegeSecondText3",
      //   list: ["subTitleListPflege3_3", "subTitleListPflege3_4"],
      // },
    ],
  },
  {
    title: "medizin",
    image: medizin,
    alt: "medicine photo",
    description: "medizinText",
    tabletText: "medizinText",
    mobileText: "medizinJobText",
    tabletSubText: "medizinJobText",
    list: [
      "medizinJobList1",
      "medizinJobList2",
      "medizinJobList3",
      // "medizinJobList4",
      // "medizinJobList5",
      // "medizinJobList6",
      // "medizinJobList7",
    ],
    text: "deText",
    subcategories: [
      {
        title: "subTitle1",
        list: ["subTitleList1_1", "subTitleList1_2", "subTitleList1_3"],
      },
      {
        title: "subTitle2",
        list: ["subTitleList2_1", "subTitleList2_2", "subTitleList2_3"],
      },
    ],
  },
  {
    title: "sozialarbeit",
    image: sozialarbeit,
    alt: "kids photo",
    description: "sozialarbeitFullText",
    tabletText: "sozialarbeitText",
    tabletSubText: "sozialarbeitJobText",
  },
  {
    title: "technik",
    image: logistik,
    alt: "logistic photo",
    description: "technikJobText",
    tabletText: "technikText",
    tabletSubText: "technikJobText",
  },
  {
    title: "facility",
    image: facility,
    alt: "facility photo",
    description: "facilityJobText",
    tabletText: "facilityText",
    tabletSubText: "facilityJobText",
  },
  {
    title: "sanitar",
    image: sanitär,
    alt: "sanitär photo",
    description: "sanitarFullText",
    tabletText: "sanitarText",
    tabletSubText: "sanitarJobText",
  },
  {
    title: "mechanik",
    image: automechanik,
    alt: "automechanik photo",
    description: "mechanikFullText",
    tabletText: "mechanikText",
    tabletSubText: "mechanikJobText",
  },
];
