import Button from "@modules/common/components/button"
import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex flex-wrap gap-3 items-start justify-between mb-4">
      <div>
        <h2 className="text-xl-semi">Already have an account?</h2>
        <p className="text-base-regular text-gray-700 mt-2">
          Sign in for a better experience.
        </p>
      </div>
      <div>
        <Link href="/account/login">
          <a>
            <Button variant="primary" className="w-full">
              Sign in
            </Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
