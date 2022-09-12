interface ButtonProps {
  title: string;
}

export function Button(props: ButtonProps) {
  return(
    <button>
      {props.title}
    </button>
  )
}