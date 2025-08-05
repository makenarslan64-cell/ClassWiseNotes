'use client';

type Props = {
  action: () => void;
};

export function ClientDeleteButton({ action }: Props) {
  return (
    <form action={action}>
      <button
        type="submit"
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
      >
        Delete
      </button>
    </form>
  );
}
