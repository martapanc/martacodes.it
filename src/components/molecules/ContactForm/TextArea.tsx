import { Field, useField } from 'formik';

import clsxm from '../../../lib/clsxm';

export interface TextAreaProps {
  id: string;
  label: string;
  placeholder?: string;
}

export const TextArea = ({ id, label, placeholder }: TextAreaProps) => {
  const fieldProps = { id, name: id, label, placeholder };
  const [_, meta] = useField(fieldProps);

  return (
    <label htmlFor='firstName' className='mb-2 mt-6 flex flex-col font-bold'>
      {label}
      <Field
        as='textarea'
        placeholder={placeholder}
        name={id}
        id={id}
        className={clsxm(
          'my-2 rounded-md px-4 py-2 ring-1 dark:bg-transparent font-normal',
          {
            'ring-red-600': meta.touched && meta.error,
            'ring-grey-400 dark:ring-slate-500': !meta.touched || !meta.error,
          },
        )}
        rows={7}
      />
      <div className='font-sm font-normal text-red-600'>
        {meta.touched && meta.error}
      </div>
    </label>
  );
};
