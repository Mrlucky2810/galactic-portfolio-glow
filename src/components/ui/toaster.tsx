// src/components/ui/toaster.tsx
import { use_toast } from "@/hooks/use_toast.ts"
import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastTitle,
} from "@/components/ui/toast"

export function Toaster() {
    const { toasts } = use_toast()

    return (
        <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
            {toasts.map(function ({ id, title, description, action, ...props }) {
                return (
                    <Toast key={id} {...props} id={id}>
                        <div className="grid gap-1">
                            {title && <ToastTitle>{title}</ToastTitle>}
                            {description && (
                                <ToastDescription>{description}</ToastDescription>
                            )}
                        </div>
                        {action}
                        <ToastClose />
                    </Toast>
                )
            })}
        </div>
    )
}