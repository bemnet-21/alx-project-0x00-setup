import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="button 1" styles="rounded-sm" />
      <Button title="button 2" styles="rounded-md" />
      <Button title="button 3" styles="rounded-full" />
    </div>
  )
}
export default Landing