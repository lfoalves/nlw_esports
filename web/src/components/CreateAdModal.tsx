import * as Dialog from '@radix-ui/react-dialog';
import { Form } from './Form/Form';

export function CreateAddModal() {
  return(
    <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

        <Dialog.Content className='fixed bg-[#242634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[498px] shadow-lg shadow-black'>
          <Dialog.Title className='text-3xl text-white font-black'>
            Publique um anúncio
        </Dialog.Title>
              
            <Form />

        </Dialog.Content>

    </Dialog.Portal>
  );
}