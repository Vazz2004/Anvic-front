export default function VistaDash ({ titulo, descripPage, content, boton }) {
  return (
<div className="container  px-4 md:px-6 w-full mt-56">
    <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
        <div className="grid gap-1">
            <h1 className="text-3xl font-bold tracking-tight">{titulo}</h1>
            <p className="text-gray-500 dark:text-gray-400">{descripPage}</p>
        </div>
        <div className="w-full md:w-auto flex justify-end  ">
            {boton}
        </div>
    </div>
    <div className="flex justify-center mt-8">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
            {content}
        </div>
    </div>
</div>

  )
}
