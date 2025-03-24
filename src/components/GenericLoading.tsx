import SvgLoading from '@/svg/Loading';

export default function GenericLoading({ children }: { children?: React.ReactNode }) {
  return (
    <div className="mt-6 flex flex-col items-center gap-5 h-[60vh] justify-center">
      <div>
        <SvgLoading className="h-12 w-12 animate-spin stroke-current" />
      </div>
      <p className="text-lg font-(family-name:--font-montserrat)">{children || 'Loading page'}</p>
    </div>
  );
}
