import GrantFinderForm from "@/components/grant-finder-form";

export default function GrantFinderPage() {
  return (
    <div className="container py-12 md:py-24 animate-fade-in">
       <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">AI Grant Finder</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover funding opportunities tailored for your business. Our AI-powered tool analyzes your company's profile to suggest relevant grants and financial support programs.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <GrantFinderForm />
      </div>
    </div>
  )
}
