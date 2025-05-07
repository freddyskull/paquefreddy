import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { DialogClose } from '@radix-ui/react-dialog'
import { Input } from '../ui/input'

export const createCategorieD = () => {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button variant="outline">Crear categoría</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Crear categoría</DialogTitle>
                <DialogDescription>
                </DialogDescription>
                <Input placeholder="Nombre categoría" />
            </DialogHeader>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                    <Button>Continue</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
