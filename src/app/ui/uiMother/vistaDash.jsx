export default function VistaDash ({ titulo, descripPage, content, boton }) {
  return (
        <section className="w-full mx-40">
            <div className="container mx-auto w-9/12 ">
                <div className="flex flex-col md:flex-row items-center w-full justify-between gap-5 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-1">
                        <h1 className="text-3xl font-bold tracking-tight">{titulo}</h1>
                        <p className="text-gray-500 dark:text-gray-400">{descripPage}</p>
                    </div>
                    <div className="w-full">
                        {boton}
                    </div>
                </div>
                <div className="flex justify-center mt-8 ">
                    <div className=" w-full grid grid-cols-5 gap-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
                        {content}
                    </div>
                </div>
            </div>
        </section>
  )
}
