import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Layout } from '../components/ui/Layout'
import { Title } from '../components/Title'

// update id/name of questions on 4th page
// add testing logic to 3rd and 4th page
// use the 'step' state to fill in the progress bar
// use mt and mb Tailwind classes to add correct spacing around titles, p, and inputs

function Survey1({ register, getValues, setStep }) {
   const [error, setError] = React.useState('')
   const handleClick = () => {
      if (
         Object.entries(getValues())
            .filter(item => item[0].match(/pg1-*/))
            .filter(item => item[1]).length === 1
      ) {
         // user selected 1 item, they can move forward
         setStep(2)
      } else {
         // user selected no items or 2+ items -- display error
         setError('You must select 1 item only.')
      }
   }

   return (
      <>
         <div className="">
            <Title variant="h1">Hi, Roy!</Title>
            <Title variant="h2" className="mt-2">
               Before we begin, we'd like to ask a few questions on food waste.
            </Title>
            <p>How often do you go grocery shopping?</p>
            <div className="form-control">
               <label className="border-[1px] border-black py-2 px-5 rounded-full">
                  <span className="text-[1.125rem] font-semibold flex items-center justify-center">
                     Once a day
                  </span>
                  <input
                     type="checkbox"
                     {...register('pg1-onceADay')}
                     className="sr-only"
                  />
               </label>
            </div>
            <div className="form-control mt-4">
               <label className="border-[1px] border-black py-2 px-5 rounded-full">
                  <span className="text-[1.125rem] font-semibold flex items-center justify-center">
                     Once a week
                  </span>
                  <input
                     type="checkbox"
                     {...register('pg1-onceAWeek')}
                     className="sr-only"
                  />
               </label>
            </div>
            <div className="form-control mt-4">
               <label className="border-[1px] border-black py-2 px-5 rounded-full">
                  <span className="text-[1.125rem] font-semibold flex items-center justify-center">
                     Once a month
                  </span>
                  <input
                     type="checkbox"
                     {...register('pg1-onceAMonth')}
                     className="sr-only"
                  />
               </label>
            </div>
            <div className="form-control mt-4">
               <label className="border-[1px] border-black py-2 px-5 rounded-full">
                  <span className="text-[1.125rem] font-semibold flex items-center justify-center">
                     Once a year
                  </span>
                  <input
                     type="checkbox"
                     {...register('pg1-onceAYear')}
                     className="sr-only"
                  />
               </label>
            </div>
            {error && (
               <div>
                  <p className="text-red">{error}</p>{' '}
               </div>
            )}
            <button type="button" onClick={handleClick}>
               Next
            </button>
         </div>
      </>
   )
}

function Survey2({ register, getValues, setStep }) {
   const [error, setError] = React.useState('')
   const handleClick = () => {
      console.log('page2', getValues())
      if (
         getValues('excessiveAmount') ||
         getValues('moreThan') ||
         getValues('reasonableAmount') ||
         getValues('veryLittle') ||
         getValues('none')
      ) {
         setError('You selected more than 1')
         setStep(3)
      }
      setError('You did not select a option')
   }

   return (
      <>
         <div className="">
            <div className="font-montserrat">
               <p>
                  How much food would you say that your household usually throws
                  away each week?
               </p>
            </div>
            <div className="form-control">
               <label className="border-[1px] border-black py-2 px-5 rounded-full mt-4">
                  <span className="text-[1.125rem] font-semibold flex items-center justify-center">
                     An excessive amount
                  </span>
                  <input
                     type="checkbox"
                     {...register('excessiveAmount')}
                     className="sr-only"
                  />
               </label>
            </div>
            <div className="form-control mt-4">
               <label className="border-[1px] border-black py-2 px-5 rounded-full">
                  <span className="text-[1.125rem] font-semibold flex items-center justify-center">
                     More than you should
                  </span>
                  <input
                     type="checkbox"
                     {...register('moreThan')}
                     className="sr-only"
                  />
               </label>
            </div>
            <div className="form-control mt-4">
               <label className="border-[1px] border-black py-2 px-5 rounded-full">
                  <span className="text-[1.125rem] font-semibold flex items-center justify-center">
                     A reasonable amount
                  </span>
                  <input
                     type="checkbox"
                     {...register('reasonableAmount')}
                     className="sr-only"
                  />
               </label>
            </div>
            <div className="form-control mt-4">
               <label className="border-[1px] border-black py-2 px-5 rounded-full">
                  <span className="text-[1.125rem] font-semibold flex items-center justify-center">
                     Very little
                  </span>
                  <input
                     type="checkbox"
                     {...register('veryLittle')}
                     className="sr-only"
                  />
               </label>
            </div>
            <div className="form-control mt-4">
               <label className="border-[1px] border-black py-2 px-5 rounded-full">
                  <span className="text-[1.125rem] font-semibold flex items-center justify-center">
                     None
                  </span>
                  <input
                     type="checkbox"
                     {...register('none')}
                     className="sr-only"
                  />
               </label>
            </div>
            {error && (
               <div>
                  <p className="text-red">{error}</p>{' '}
               </div>
            )}
            <button type="button" onClick={handleClick}>
               Next
            </button>
         </div>
      </>
   )
}

function Survey3({ register, getValues, setStep }) {
   const [error, setError] = React.useState('')
   const handleClick = () => {
      if (getValues('foodwaste')) {
         setStep(4)
      }
      setError('You did not input anything')
   }

   return (
      <>
         <div className="">
            <div className="font-montserrat mt-2">
               <p>
                  How would you personally rate yourself at managing food waste,
                  1 being poor and 10 being “I'm a master”? Use the slider to
                  record your response.
               </p>
            </div>
            <div className="form-control">
               <div className="mt-6">
                  <input
                     type="range"
                     min="1"
                     max="10"
                     defaultValue="0"
                     className="range"
                     step="1"
                     {...register('rating')}
                  />
               </div>
               <div className="w-full flex justify-between text-xs px-2">
                  <span>1</span>
                  <span></span>
                  <span>5</span>
                  <span></span>
                  <span>10</span>
               </div>
               <div>
                  <p className="mt-12 font-montserrat">
                     What food item do you find gets wasted most often in your
                     household?
                  </p>
               </div>
               <div className="mt-2 font-montserrat">
                  <p>Input anything</p>
               </div>
               <div className="form-control">
                  <input
                     className="shadow appearance-none border-[1px] border-black rounded-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                     {...register('foodwaste')}
                     type="text"
                     placeholder="e.g. bread"
                  />
               </div>
            </div>
            {error && (
               <div>
                  <p className="text-red">{error}</p>{' '}
               </div>
            )}
            <button type="button" onClick={handleClick}>
               Next
            </button>
         </div>
      </>
   )
}

function Survey4({ register, getValues, setStep }) {
   const [error, setError] = React.useState('')
   const handleClick = () => {
      if (
         getValues('ans1') ||
         getValues('ans2') ||
         getValues('ans3') ||
         getValues('ans4') ||
         getValues('ans5') ||
         getValues('ans6')
      ) {
         setStep(5)
         console.log('done')
      }
      setError('You did not select a option')
   }
   return (
      <>
         <div className="">
            <Title variant="h1">Last Question!</Title>
            <div className="font-montserrat mt-4">
               <p>
                  Select all that apply: Which of these actions are you
                  currently doing at home?
               </p>
            </div>
            <div className="form-control">
               <label className="label cursor-pointer justify-start">
                  <input
                     type="checkbox"
                     className="checkbox checkbox-primary"
                     {...register('ans1')}
                  />
                  <span className="label-text font-montserrat ml-3">
                     Checking the fridge/freezer/pantry before shopping
                  </span>
               </label>
               <label className="label cursor-pointer justify-start">
                  <input
                     type="checkbox"
                     className="checkbox checkbox-primary"
                     {...register('ans2')}
                  />
                  <span className="label-text font-montserrat ml-3 ">
                     Writing a meal plan
                  </span>
               </label>
               <label className="label cursor-pointer justify-start">
                  <input
                     type="checkbox"
                     className="checkbox checkbox-primary"
                     {...register('ans3')}
                  />
                  <span className="label-text font-montserrat ml-3">
                     Writing a shopping list
                  </span>
               </label>
               <label className="label cursor-pointer justify-start">
                  <input
                     type="checkbox"
                     className="checkbox checkbox-primary"
                     {...register('ans4')}
                  />
                  <span className="label-text font-montserrat ml-3">
                     Buying only what is needed
                  </span>
               </label>
               <label className="label cursor-pointer justify-start">
                  <input
                     type="checkbox"
                     className="checkbox checkbox-primary"
                     {...register('ans5')}
                  />
                  <span className="label-text font-montserrat ml-3">
                     Check use by and best before dates
                  </span>
               </label>
               <label className="label cursor-pointer justify-start">
                  <input
                     type="checkbox"
                     className="checkbox checkbox-primary"
                     {...register('ans6')}
                  />
                  <span className="label-text font-montserrat ml-3">
                     Consider portion size
                  </span>
               </label>
            </div>
            {error && (
               <div>
                  <p className="text-red">{error}</p>{' '}
               </div>
            )}
            <button type="submit" onClick={handleClick}>
               Finish
            </button>
         </div>
      </>
   )
}

export function FinishedSurvey() {
   return (
      <>
         <img
            src="https://i.imgur.com/lRDVqPC.png"
            alt="checkmark"
            width="164px"
            height="164px"
         />
         <Title variant="h1">Thanks for answering!</Title>
         <div className="font-montserrat mt-6 mb-4">
            <p>
               You'll have access to them in your account page if you want to
               see them again.
            </p>
         </div>
         <button type="button">Got it</button>
      </>
   )
}

export default function Questionnaire() {
   const [step, setStep] = React.useState(1)
   const {
      register,
      handleSubmit,
      watch,
      getValues,
      formState: { errors },
   } = useForm()

   const surveyMutation = useMutation(data => {
      return axios.post(`${process.env.APP_URL}/survey'`, data)
   })

   const onSubmit = data => {
      console.log(data)
      surveyMutation.mutate(data)
   }

   return (
      <>
         <ul className="steps steps-horizontal">
            <li className="step step-primary"></li>
            <li className="step"></li>
            <li className="step"></li>
            <li className="step"></li>
         </ul>
         <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
               <Survey1
                  register={register}
                  getValues={getValues}
                  setStep={setStep}
               />
            )}
            {step === 2 && (
               <Survey2
                  register={register}
                  getValues={getValues}
                  setStep={setStep}
               />
            )}
            {step === 3 && (
               <Survey3
                  register={register}
                  getValues={getValues}
                  setStep={setStep}
               />
            )}
            {step === 4 && (
               <Survey4
                  register={register}
                  getValues={getValues}
                  setStep={setStep}
               />
            )}
            {step === 5 && <FinishedSurvey />}

            <button type="submit">Save</button>
         </form>
      </>
   )
}

Questionnaire.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>{page}</Layout>
      </>
   )
}
