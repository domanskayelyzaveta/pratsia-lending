import { createGlobalStyle } from "styled-components";

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker {
    display: contents !important;
    border-radius: 26px !important;
  }

  .react-datepicker__month-container {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
      gap: 12px;
  
    width: 256px ;
    height: 268px ;
  
    padding: 20px !important;
  
    border-radius: 24px !important;
    border: 1px solid var(--blue-100) !important;
    background: var(--white) !important;

      @media screen and (min-width: 768px) {
        gap: 16px;
        padding: 26px !important;

        width: 334px;
        height: 370px;
    }
  }
  
  .react-datepicker__month {
    height: 152px ;
    width: 216px;
    display: flex !important;
    flex-direction: column !important;
    column-gap: 8px !important;
    row-gap: 4px !important;
    align-items: center !important;
    justify-content: center !important;
  
    margin: 0px !important;

     @media screen and (min-width: 768px) {
        width: 286px;
        height: 210px;

        row-gap: 10px !important;
    }
  }
  
.react-datepicker-popper {
    
    @media screen and (min-width: 768px) {
  left: 144px!important;
  }
}
  .react-datepicker__header {
    background-color: transparent !important;
    border-bottom: none !important;
    padding: 0px !important;
  }
  
  .react-datepicker__current-month {
    position: absolute;
    top: -14px;
    left: 8px;
  
    font-family: Montserrat !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    line-height: 150% !important;
  
    color: var(--black-200) !important;

      @media screen and (min-width: 768px) {
        font-size: 20px!important;
    }
  }
  
  .react-datepicker__day {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  
    font-family: Montserrat !important;
    font-size: 12px !important;
    font-weight: 400 !important;
    line-height: 150% !important;
  
    color: var(--black-200) !important;

     @media screen and (min-width: 768px) {
        font-size: 18px !important;
    }
  }
  
  .react-datepicker__day-name {
    font-family: Montserrat !important;
    font-size: 12px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 150% !important;
  
    color: var(--black-200) !important;

      @media screen and (min-width: 768px) {
        font-size: 18px !important;
    }
  }
  
  .react-datepicker__day-names {
    margin-bottom: 0px !important;
    margin-top: 20px !important;

      @media screen and (min-width: 768px) {
        display: flex;
        gap: 8px;
        margin-top: 36px!important;
    }
  }
  
  .react-datepicker__day--today {
    width: 24px !important;
    height: 24px !important;
    border-radius: 8px !important;
    border: 1px solid var(--grey) !important;

         @media screen and (min-width: 768px) {
            width: 30px !important;
            height: 30px !important;
  }

  }
  
  .react-datepicker__day--selected {
    width: 24px !important;
    height: 24px !important;
    padding: 2px !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 8px !important;
  
    border-radius: 8px !important;
    border: 1px solid var(--blue-200) !important;
    background: var(--background) !important;

         @media screen and (min-width: 768px) {
            width: 30px !important;
            height: 30px !important;
        }
  }
  
  .react-datepicker__day--outside-month {
    color: var(--additional-Gray-100) !important;
  }
  
  .react-datepicker__week {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

     @media screen and (min-width: 768px) {
         gap: 8px;
   
    }

   
  }
  
  .react-datepicker__navigation-icon.react-datepicker__navigation-icon--next {
    display: none !important;
  }
  
  .react-datepicker__navigation-icon.react-datepicker__navigation-icon--previous {
    display: none !important;
  }
`;

export default CalendarGlobalStyles;
