import Card from "@/components/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main id="home" className="flex-1 mx-auto">
        <section className="my-auto space-y-6 py-32 md:py-48 lg:py-52">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-7xl">
              A End to End Software Solutions
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Aumble for all business solution
            </p>
          </div>
        </section>
        <section
          id="solutions"
          className="mx-auto container space-y-6 py-8 md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Solutions</h2>
            <p className="max-w-[85%] text-muted-foreground sm:text-lg">
              Unlock powerful capabilities for your project.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
            <Card
              title="Web Development"
              description="We specialize in building fast, secure, and scalable websites tailored to your business goals. From concept to launch, we deliver end-to-end web development solutions that drive results."
            />
            <Card
              title="Testing Solution"
              description="We provide end-to-end software testing solutions to ensure your product is secure, bug-free, and ready for launch. From manual to automated testing, we guarantee quality at every stage."
            />
            <Card
              title="ERP Solution"
              description="We deliver smart, scalable ERP solutions that streamline operations, improve efficiency, and drive growth across your entire organization."
            />
          </div>
        </section>
      </main>
    </div>
  );
}
