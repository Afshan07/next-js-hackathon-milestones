import { Button } from "@/components/ui/button"
interface Iprops {
text:string
className?:string

}

// export default function Home(props:Iprops) {
//   return (
//      <div className="sm:w-20 md:w-40 lg:w-48">
       
//       <Button variant="secondary" className={`${props.className || "bg-orange-500 text-indigo-950"} w-full rounded-full text-md font-bold`}>{props.text}</Button>
//       {props.text}
//   </Button>
//       </div>
// }


export default function Home(props: Iprops) {
  return (
    <div>
       <Button variant="secondary" className={`${props.className || "bg-orange-500 text-indigo-950"}`}>{props.text}</Button>
      
      
    </div>
  )
}
