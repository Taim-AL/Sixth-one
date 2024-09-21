import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { questionsAnswers } from './Data';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
        {questionsAnswers.map((e)=>{
            return(
                <Accordion className='mb-3 accordion-summary' expanded={expanded === e.expanded} onChange={handleChange(e.expanded)}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon  className='expand-moreIcon'/>}
                    aria-controls={e.controls}
                    id={e.id}
                    
                    >
                    <Typography className='question-accordion' sx={{ width: '70%', flexShrink: 0 }}>
                        {e.question}
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className='answer-accordion'>
                        {e.answer}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            )
        })}
    </div>
  );
}