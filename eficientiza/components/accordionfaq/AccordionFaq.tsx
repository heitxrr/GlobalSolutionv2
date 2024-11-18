
import Faq from "@/types/Faq";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { IoIosArrowDropdownCircle } from 'react-icons/io';

interface AccordionFaqProps {
  faq: Faq
}

function AccordionFaq({ faq }: AccordionFaqProps) {
  return (
    <Accordion
      sx={{
        backgroundColor: '#43793c',
        borderRadius: '10px',
        boxShadow: 'none',
        '&:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<IoIosArrowDropdownCircle size={'1.5rem'} color="black" />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          fontSize: '1.25rem',
          fontWeight: '600',
        }}
      >
        {faq.pergunta}
      </AccordionSummary>
      <AccordionDetails>
        {faq.resposta}
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionFaq