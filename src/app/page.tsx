import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          死亡通知单&nbsp;
          <code className="font-mono font-bold">beta</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] d-fmt">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/s27402645.png"
          alt="封面"
          width={258}
          height={270}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left d-forub">
        <a
          // href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            死亡通知单{' '}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            十八年前的爆炸案；恋人与好友，十八年的追念和自责；罗飞的秘密；Eumenides的由来；两分钟的时差。
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            宿命{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            十八年前的真相如何，庞大的商业集团势力重组，Eumenides的身世之谜（另一种说法：上半部叫“救赎” 下半部“宿命”）。
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            离别曲{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          杜明强的监狱生活；会变长的铅笔；被拿捏的每一个罪犯；完美的越狱计划；狱中的通知单；罗飞与阿华继续对峙；
          </p>
        </a>
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            惩罚{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Eumenides已深陷重狱，谁又送来神秘字条？一切有罪之人都要受到惩罚！无论用什么方式都别想逃脱惩罚，哪怕是死亡也不可以。
          </p>
        </a>
      </div>
      <div className="max-w-5xl w-full items-center text-center d-zyrw">
          <h2 className="text-center font-semibold ">
            主要人物{' '}
          </h2>
          
          <h3 className="font-semibold d-rwjs">
            罗飞
          </h3>
          <p  className="group rounded-lg border border-transparent px-5 py-4 transition-colors text-sm text-left opacity-50">
            &nbsp;&nbsp;龙州市刑警队长，后任副局长，因为特殊任务被调去省城。记忆力超群、逻辑思维强、胆大心细、为真相可以不顾一切！前女友孟芸，不幸死去。  
            罗飞是警校最出色的学员之一（另外两个是袁志邦与孟芸），各项成绩极为出色，被誉为“最出色的学员”。他的前途是极为光明的，甚至引起了传奇警探丁科的注意，
            后者甚至想把他当做自己的接班人来培养。可是他毕业前却风云突变，他创造了一个Eumenides的角色，并以这个角色小小地惩治了犯了小错误的同学，
            结果直接导致丁科对他期望的改变。丁科选择了另一个出色的学员袁志邦来当自己的接班人，而后袁志邦却因为自身的性格问题偏离了丁科期待，
            走上了一条用死刑惩治法律无法惩治的人的路。袁志邦企图炸死罗飞的女朋友孟芸来切断自己与罗飞的联系，结果却因为孟芸的关系导致炸弹提前爆炸，
            虽然炸死孟芸却也导致自己被炸得不成人形。这桩爆炸案直接影响了罗飞前程，他仅被分配到龙州这个二线城市当一位普通干警。虽然命运不公，
            但罗飞却靠着自己的努力步步高升。在经历过《凶画》，《鬼望坡》，《摄魂谷》三个故事之后，他终于被调到省城调查死亡通知单一案。
            他也在这里认识了很多朋友，最重要的的莫过于穆剑云。在死亡通知单案中，原先的省城刑警队队长韩灏被新一代的Eumenides诱导而开枪击毙了Eumenides的目标邓骅，
            因而韩灏成为了有罪之人。事后，因为在案中的出色表现，他顶替韩灏当上了代理刑警队队长，继续追查死亡通知单一案。新一代Eumenides是他最重要的的对手之一，
            但是他对新一代Eumenides却屡屡手下留情，新一代Eumenides杀的都是法律上所不能惩治但又穷凶极恶之人。
            罗飞跟Eumenides坚守着一个共同的立场——痛恨一切罪恶。
          </p>
          <h3 className="font-semibold d-rwjs">
            Eumenides
          </h3>
          <p  className="group rounded-lg border border-transparent px-5 py-4 transition-colors text-sm text-left opacity-50">
            &nbsp;&nbsp;Eumenides，意为复仇女神，高智商杀手代号。原本是罗飞在警校期间惩罚坏学生用的代号，后被初代Eumenides（袁志邦）用来给死亡通知单署名。
            Eumenides严格意义来说是有三次迭代：第一次罗飞在警校期间惩罚坏学生，此时罗飞即是第一代Eumenides，但罗飞的惩罚方式并没有致命。
            第二次则是由罗飞的好友袁志邦将Eumenides正式作为死亡通知单的署名，发给薛大林、邓玉龙等人。
            第三次则是二代Eumenides文成宇，继承了老师袁志邦的遗愿，继续用Eumenides的身份惩治法律之外的罪恶。
          </p>
      </div>
    </main>
  )
}
