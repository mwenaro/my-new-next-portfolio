'use client'
import { useFormStatus } from 'react-dom'
import { Button } from '.'
import { cn } from '@/lib/utils'

export const SubmitButton = ({
  btnText,
  loadingText,
  className = ""
  
}: {
  btnText: string
  loadingText: string,
  className?:string
}) => {
  const { pending } = useFormStatus()
  return (
    <Button
      variant="primary"
      className={cn(`w-[130px] min-w-fit`, className)}
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <span className="loader-indicator">{loadingText}</span>
      ) : (
        btnText
      )}
    </Button>
  )
}
