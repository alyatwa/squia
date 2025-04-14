import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui";

interface AlertConfirmProps {
  button: React.ReactNode;
  onConfirm: () => void;
  title?: string;
  description?: string;
}

export function AlertConfirm({
  button = <Button variant="outline">Show Dialog</Button>,
  onConfirm,
  title = "Are you sure you want to continue?",
  description = "This action cannot be undone.",
}: AlertConfirmProps) {
  return (
    <AlertDialog defaultOpen={false}>
      <AlertDialogTrigger asChild>{button}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>إلغاء</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>حذف</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
