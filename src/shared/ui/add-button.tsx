import { Plus } from "lucide-react"
import { CircularButton, type CircularButtonProps } from "./circular-button"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AddButton = ({ children, ...rest }: CircularButtonProps) => {
    return <CircularButton className="fixed bottom-6 right-6" {...rest}><Plus size={40} /></CircularButton>
}
