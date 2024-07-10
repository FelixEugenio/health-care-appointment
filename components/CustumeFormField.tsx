"use client"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FormFieldtype } from "./forms/PatientForm"
import { Label } from "@radix-ui/react-label"
import { Image } from "lucide-react"


interface CustomProps {
    control:Control<any>,
    fieldType:FormFieldtype
    name:string,
    label?:string,
    placeholder?:string,
    iconSrc?:string,
    iconAlt?:string,
    disabled?:boolean,
    dateFormat?:string,
    showTimeSelect?:boolean,
    children?:React.ReactNode,
    renderSkeleton?:(field:any) => React.ReactNode
}

const RenderInput = ({field,props}:{field:any ,props:CustomProps}) =>{
  const {fieldType,iconSrc,iconAlt,placeholder} = props;
  
    switch (props.fieldType){
    case FormFieldtype.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
         {iconSrc && (
          <Image 
          src={iconSrc}
          height={24}
          width={24}
          alt={iconAlt || 'icon'}
          className="ml-24"
          />
         )}

         <FormControl>
          <Input 
          
          placeholder={placeholder}
          {...field}
          className="shad-input border-0"
          />
         </FormControl>
        </div>
      )

      default:
        break;
    
    }
    
  
}

const CustumeFormField = (props: CustomProps) => {
  const {control,fieldType,name,label} = props;
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex-1">
                {fieldType !== FormFieldtype.CHECKBOX && label && (
                    <FormLabel>{label}</FormLabel>
                )}

                <RenderInput field={field} props={props} />
                <FormMessage className="shad-error" />
              
            </FormItem>
          )}
        />
  )
}

export default CustumeFormField