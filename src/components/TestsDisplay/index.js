import { Accordion, AccordionPanel, Box, Text } from 'grommet'
import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { getTestsByDiscipline, getTestsByTeacher } from "../../services"

export default function TestsDisplay() {
  const { filters, user } = useAuth()
  const [ tests, setTests ] = useState([])

  function handleFilters() {
    if ( filters === 'DISCIPLINAS') {
      getTestsByDiscipline( user?.token )
        .then( ( { data } ) => {
          setTests(data)
        })
        .catch( err => console.log(err) )
    }

    if ( filters === 'PESSOA INSTRUTORA') {
      getTestsByTeacher( user?.token )
        .then( ( { data } ) => {
          setTests(data)
        })
        .catch( err => console.log(err) )
    }
  }

  useEffect( handleFilters, [filters]) //eslint-disable-line

  return (
    <>
      { tests === []
          ? 'Loading tests'
          : filters === 'PESSOA INSTRUTORA'
          ? tests?.map( teacher => (
              <Accordion>
                <AccordionPanel label={teacher.teacherName}>
                  {teacher?.tests?.map( testType => (
                    <Accordion>
                      <AccordionPanel label={testType.name}>
                        {testType?.tests?.map( testFinal => (
                          <Box pad="small" background="light">
                            <Text>{`${testFinal.name} - ${testFinal.pdfUrl} (${testFinal.teacherDiscipline.discipline.name})`}</Text>
                          </Box>
                        ))}
                      </AccordionPanel>
                    </Accordion>
                  ))}
                </AccordionPanel> 
              </Accordion>
            ))
          : tests?.map( term => (
              <Accordion>
                <AccordionPanel label={term.termName}>
                  {term?.disciplines?.map( discipline => (
                    <Accordion>
                      <AccordionPanel label={discipline.disciplineName}>
                        {discipline?.tests?.map( test => (
                          <Accordion>
                            <AccordionPanel label={test.name}>
                              {test?.tests?.map( final => (
                                <Box pad="small" background="light">
                                  <Text>{`${final.name} - ${final.pdfUrl} (${final.teacherDiscipline.teacher.name})`}</Text>
                                </Box>
                              ))}
                            </AccordionPanel>
                          </Accordion>
                        ))}
                      </AccordionPanel>
                    </Accordion>
                  ))}
                </AccordionPanel> 
              </Accordion>
            ))
      }
    </>  
  )
}