import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import TextArea from "@modules/common/components/textarea"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface FormValues extends FieldValues {
  firstName: string
  lastName: string
  phone: string
  description: string
}

const Sourcery = () => {
  const [submitError, setSubmitError] = useState<string | undefined>(undefined)
  // const router = useRouter()

  // const handleError = (_e: Error) => {
  //   setAuthError("Invalid email or password")
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = handleSubmit(async (credentials) => {
    console.log(credentials)
  })

  return (
    <div className="content-container">
      <div className="w-full flex justify-center py-24">
        <div className="max-w-lg w-full flex flex-col items-center">
          <h1 className="text-large-semi uppercase mb-6">Sourcery</h1>
          <div className="mb-6">
            <p className="text-base-regular text-gray-700 mb-8 text-sm">
              Need that must have sold out item? On the hunt for a past
              collection piece? Looking for something that’s not on our website?
              No more ringing around, searching through endless shops or
              browsing hundreds of websites.
            </p>
            <p className="text-base-regular text-gray-700 mb-8 text-sm">
              Our ability to gain access to items with high demand and painfully
              low supply is an advantage that continually rewards our clients
              with not only the items that they most desire, but also with the
              confidence in our ability and integrity to keep them coming back
              to utilise our services time and again. Let our expert team do the
              hard work for you.
            </p>

            <h6 className="font-medium text-base mb-2">HOW IT WORKS.</h6>

            <ol className="list-decimal list-inside text-sm">
              <li className="mb-2">
                FILL OUT OUR FORM AND PROVIDE AS MUCH INFORMATION AS POSSIBLE.
              </li>
              <li className="mb-2">
                WE WILL ACKNOWLEDGE YOUR REQUEST WITHIN 24 HOURS (TYPICALLY
                SOONER).
              </li>
              <li className="mb-2">
                WE’LL UPDATE YOU ON PRICE, AVAILABILITY AND LEAD TIME.
              </li>
              <li className="mb-2">
                YOU LET US KNOW YOU’RE HAPPY TO PROCEED AND A DEDICATED MEMBER
                OF OUR TEAM WILL WORK TO SOURCE AND SHIP YOUR ITEM TO YOUR
                CHOSEN DESTINATION.
              </li>
            </ol>
          </div>
          <form className="w-full" onSubmit={onSubmit}>
            <div className="flex flex-col w-full gap-y-2">
              <div className="w-full flex items-start gap-3">
                <div className="w-full">
                  <Input
                    label="First Name"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                    autoComplete="given-name"
                    errors={errors}
                  />
                </div>
                <div className="w-full">
                  <Input
                    label="Last Name"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                    autoComplete="family-name"
                    errors={errors}
                  />
                </div>
              </div>
              <Input
                label="Phone Number"
                {...register("phone", {
                  required: "Phone is required",
                })}
                autoComplete="tel"
                errors={errors}
              />
              <TextArea
                label="Item name and brand or link"
                {...register("description", {
                  required: "Item name and brand or link is required",
                })}
                errors={errors}
              />
            </div>
            {submitError && (
              <div>
                <span className="text-rose-500 w-full text-small-regular">
                  There was an error with your request. Please try again.
                </span>
              </div>
            )}
            <Button className="mt-6">Source it</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Sourcery
