"use client"
 
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

interface RedirectBtnProps{
     label:string,
     url:string
}
export const  RedirectBtn = ({label,url}:RedirectBtnProps) => {
    const router=useRouter()
    const handleRedirect=()=>{
         router.push(`/${url}`)
    }
  return (
    <Button className="bg-red-900 hover:bg-red-700" onClick={handleRedirect}>{label}</Button>
  )
}
