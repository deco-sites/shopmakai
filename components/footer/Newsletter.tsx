import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col items-center max-w-[334px] lg:max-w-[700px] mx-auto">
      <div class="flex flex-col max-w-[270px] lg:max-w-[700px]">
        <h2 class="text-xl font-black text-center mt-[46px] mb-[16.6px] lg:(my-[20px]) tracking-[1.2px]">
          MAKAI MAIL:
        </h2>
        <p class="text-sm lg:text-base text-primary text-center tracking-[.36px] leading-[26px] my-[14px]">
          Receba todas as novidades e promos que rolam por aqui!
        </p>
      </div>
      <form class="flex flex-col lg:(flex-row gap-5) items-center gap-2 font-body-strong text-body-strong w-full pt-[40px]">
        <input
          class="h-10 outline-none w-full bg-[#f5f5f5] py-[1px] py-2 px-4 flex-grow border-b-1 border-[#cacbcc] text-[11px] text-primary"
          placeholder="nome"
        />
        <input
          class="h-10 outline-none w-full bg-[#f5f5f5] py-[1px] px-4 flex-grow border-b-1 border-[#cacbcc] text-[11px] text-primary"
          placeholder="e-mail"
        />
        <button
          class="py-2 px-3 bg-dark-interactive-default w-full mt-[20px] lg:(m-0 max-w-[121px]) border-1 border-[#d1d1d1] py-[3px] px-[24px] text-primary text-xs font-semibold tracking-[1px] h-[45px] mb-[46px]"
          type="bgutton" // prevent form's default behavior
        >
          cadastrar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
