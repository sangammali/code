



















import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import PageWidth from '../common/Container';




const FAQPage = () => {
  const [expanded, setExpanded] = useState(-1); // Initialize expanded with -1 (none expanded)

  const faqData = [
    {
      question: 'What is Swarna Adarsh Abhiyaan?',
      answer:
        'A – Swarna Adarsh Abhiyaan is an Indian gold industry initiative based on the Retail Gold Investment Principles by the World Gold Council to introduce best practices and operational guidance to the industry providers. The initiative has been kicked off with the help of various leaders of the Indian gold industry led by the World God Council to improve trust amongst gold consumers with the help of the code of conducts <link> for various business types.',
    },
    {
      question: 'How is the Swarna Adarsh Abhiyaan different from Retail Gold Investment Principles developed by the World Gold Council?',
      answer:
        'You can install React using the "create-react-app" command-line tool, or you can add it to an existing project using npm or yarn.',
    },
    {
      question: 'Who has developed the Swarna Adarsh Abhiyaan?',
      answer:
        'React Hooks are functions that allow you to use state and other React features in function components instead of class components.',
    },
    {
      question: 'what are “Code of Conducts”?',
      answer:
        'React Hooks are functions that allow you to use state and other React features in function components instead of class components.',
    },
    {
      question: 'How have the Code of Conducts been developed?',
      answer:
        'React Hooks are functions that allow you to use state and other React features in function components instead of class components.',
    },
    
    {
      question: 'How can I be a part of the Swarna Adarsh Abhiyaan?',
      answer:
        'React Hooks are functions that allow you to use state and other React features in function components instead of class components.',
    },
  ];

  const toggleAccordion = (index) => {
    if (expanded === index) {
      setExpanded(-1);
    } else {
      setExpanded(index);
    }
  };

  return (
    
<PageWidth>

      <Grid container spacing={2}>
       
        <Grid item xs={12} sx={{marginTop:{xs:"20px", sm:"20px", md:"30px"}}}>
          <div style={{boxShadow:"none"}}>
            {faqData.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={() => toggleAccordion(index)} style={{boxShadow:"none", paddingBottom:"20px"}}
              >
                <AccordionSummary sx={{border:"none", borderBottom:"2px solid #D0AC54",}}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => toggleAccordion(index)}
                    >
                      {expanded === index ? '− ' : '+ '}
                    </span>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{paddingTop:"20px"}}>
                  <Typography variant="body2">{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Grid>
      </Grid>
      </PageWidth>
  );
};

export default FAQPage;




















// import React, { useState } from 'react';
// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Typography,
//   Container,
//   Grid,
// } from '@mui/material';
// import PageWidth from '../common/Container';




// const FAQPage = () => {
//   const [expanded, setExpanded] = useState(-1); // Initialize expanded with -1 (none expanded)

//   const faqData = [
//     {
//       question: 'What is Swarna Adarsh Abhiyaan?',
//       answer:
//         'A – Swarna Adarsh Abhiyaan is an Indian gold industry initiative based on the Retail Gold Investment Principles by the World Gold Council to introduce best practices and operational guidance to the industry providers. The initiative has been kicked off with the help of various leaders of the Indian gold industry led by the World God Council to improve trust amongst gold consumers with the help of the code of conducts <link> for various business types.',
//     },
//     {
//       question: 'How is the Swarna Adarsh Abhiyaan different from Retail Gold Investment Principles developed by the World Gold Council?',
//       answer:
//         'You can install React using the "create-react-app" command-line tool, or you can add it to an existing project using npm or yarn.',
//     },
//     {
//       question: 'Who has developed the Swarna Adarsh Abhiyaan?',
//       answer:
//         'React Hooks are functions that allow you to use state and other React features in function components instead of class components.',
//     },
//     {
//       question: 'what are “Code of Conducts”?',
//       answer:
//         'React Hooks are functions that allow you to use state and other React features in function components instead of class components.',
//     },
//     {
//       question: 'How have the Code of Conducts been developed?',
//       answer:
//         'React Hooks are functions that allow you to use state and other React features in function components instead of class components.',
//     },
    
//     {
//       question: 'How can I be a part of the Swarna Adarsh Abhiyaan?',
//       answer:
//         'React Hooks are functions that allow you to use state and other React features in function components instead of class components.',
//     },
//   ];

//   const toggleAccordion = (index) => {
//     if (expanded === index) {
//       setExpanded(-1); // Close the currently expanded accordion
//     } else {
//       setExpanded(index); // Expand the selected accordion
//     }
//   };

//   return (
    
// <PageWidth>

//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Typography variant="h4">Frequently Asked Questions</Typography>
//         </Grid>
//         <Grid item xs={12}>
//           <div style={{boxShadow:"none"}}>
//             {faqData.map((item, index) => (
//               <Accordion
//                 key={index}
//                 expanded={expanded === index}
//                 onChange={() => toggleAccordion(index)}
//               >
//                 <AccordionSummary sx={{border:"none", borderBottom:"2px solid #D0AC54",}}>
//                   <Typography variant="subtitle1" fontWeight="bold">
//                     <span
//                       style={{ cursor: 'pointer' }}
//                       onClick={() => toggleAccordion(index)}
//                     >
//                       {expanded === index ? '− ' : '+ '}
//                     </span>
//                     {item.question}
//                   </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <Typography variant="body2">{item.answer}</Typography>
//                 </AccordionDetails>
//               </Accordion>
//             ))}
//           </div>
//         </Grid>
//       </Grid>
//       </PageWidth>
//   );
// };

// export default FAQPage;
