import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
declare const Dialog: React.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogContent: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const DialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const DialogDescription: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, };
