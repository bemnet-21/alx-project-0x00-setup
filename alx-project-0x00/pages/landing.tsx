import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="button 1" style="rounded-sm" />
      <Button title="button 2" style="rounded-md" />
      <Button title="button 3" style="rounded-lg" />
    </div>
  )
}
export default Landing