import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon } from "lucide-react"

export default function AlertSucesso({titulo, mensagem, className}) {

    return (
        <Alert className={className} variant="sucess">
            <CheckCircle2Icon />
            <AlertTitle>{titulo}</AlertTitle>
            <AlertDescription>
                {mensagem}
            </AlertDescription>
        </Alert>
    )
}