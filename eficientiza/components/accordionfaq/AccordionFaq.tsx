
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
        backgroundColor: 'rgba(94, 173, 84, 0.3)',
        borderRadius: '10px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginBottom: '20px',
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