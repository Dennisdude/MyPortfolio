export const About = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Aspiring Web Developer
                    </h3>

                    <p className="text-muted-foreground">
                        Write Text: experience # 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                        sed diam voluptua.
                    </p>

                    <p className="text-muted-foreground">
                        Write Text: specialization #
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                    </p>
                </div>

                <div>

                </div>
            </div>
        </div>
    </section>
}