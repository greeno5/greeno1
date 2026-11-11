import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[80dvh] place-items-center pt-28 text-center">
      <div>
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-5 font-display text-5xl font-bold uppercase sm:text-7xl">
          Off the <span className="text-gradient-green">path</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-white/60">This page hopped away. Let&apos;s get you back to GREENO.</p>
        <div className="mt-9">
          <Button href="/">Back home</Button>
        </div>
      </div>
    </section>
  );
}
