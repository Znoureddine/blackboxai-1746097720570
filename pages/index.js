export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans" dir="rtl">
      {/* Header */}
      <header className="border-b border-gray-300">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
          <a href="/" className="flex items-center">
            <img
              src="https://dawarati.ma/wp-content/uploads/2022/05/Logo-Win-New-01.png"
              alt="Logo Win"
              className="h-12"
            />
          </a>
          <nav className="hidden md:flex space-x-6">
            <a
              href="https://api.whatsapp.com/send?phone=212689104823"
              className="text-green-600 hover:text-green-800 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              تواصل معنا
            </a>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button placeholder */}
          </div>
        </div>
      </header>

      {/* Main Banner */}
      <section className="bg-gray-50 py-8 px-4 md:px-0">
        <div className="container mx-auto max-w-5xl text-center">
          <img
            src="https://dawarati.ma/wp-content/uploads/2022/12/logo-WN-Horiz-1-1024x352.png"
            alt="مؤسسة وين"
            className="mx-auto mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            دورة حضورية: الهشاشة النفسية و الصلابة النفسية
          </h1>
          <p className="text-lg mb-6">مؤسسة وين تقدم لكم ولأول مرة في المغرب !</p>

          <h2 className="text-2xl font-semibold mb-1">مع د.أحمد هارون</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-6">
            <div>
              <h3 className="font-semibold text-lg">المكان</h3>
              <p>الدار البيضاء / أولاين</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">المدة</h3>
              <p>يومين</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">التاريخ</h3>
              <p>24 و 25 ماي</p>
            </div>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=212662615681&text=%20مرحبا%20انا%20مهتم%20(ة)%20بدورة%20الصلابة%20النفسية%20والهشاشة%20النفسية%20وأريد%20أتسجل"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition"
          >
            للاسـتفادة من الحجز المبكر
          </a>
        </div>
      </section>

      {/* Images Section */}
      <section className="container mx-auto max-w-5xl py-8 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="https://dawarati.ma/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-03-at-7.34.44-PM-819x1024.jpeg"
          alt="Course Image 1"
          className="w-full rounded shadow"
        />
        <img
          src="https://dawarati.ma/wp-content/uploads/2025/02/2ea0611f-b23e-482a-8f65-1e92daf43f7e-819x1024.jpg"
          alt="Course Image 2"
          className="w-full rounded shadow"
        />
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-50 py-8 px-4 md:px-0">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-semibold mb-2">
            انظم لأقوى مجموعة عقل مشترك خاص بتحقيق التوازن النفسي
          </h2>
          <p className="italic mb-6">
            " إذا اجتمع شخصين على هدف معين؛ تتحرر روح طاقة ثالثة " نابوليون هيل
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=212662615681&text=%20مرحبا%20انا%20مهتم%20(ة)%20بدورة%20الصلابة%20النفسية%20والهشاشة%20النفسية%20وأريد%20أتسجل"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition"
          >
            اكتشف التفاصيل
          </a>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="container mx-auto max-w-5xl py-8 px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Silver Ticket */}
        <div className="border border-gray-300 rounded p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">التذكرة الفضية</h3>
          <p className="mb-1">الهشاشة النفسية و الصلابة النفسية</p>
          <p className="text-2xl font-bold mb-1">2700</p>
          <p className="text-xl font-semibold mb-4 line-through">2200 درهم</p>
          <ul className="text-sm mb-4 list-disc list-inside space-y-1">
            <li>حضور الدورة</li>
            <li>المادة العلمية مطبوعة</li>
            <li>شهادة حضور الدورة</li>
          </ul>
          <a
            href="https://dawarati.ma?add-to-cart=13654&quantity=1&e-redirect=https://dawarati.ma/cart/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition"
          >
            احجز الآن
          </a>
        </div>

        {/* Gold Ticket */}
        <div className="border border-gray-300 rounded p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">التذكرة الذهبية</h3>
          <p className="mb-1">الهشاشة النفسية و الصلابة النفسية</p>
          <p className="text-2xl font-bold mb-1">3700</p>
          <p className="text-xl font-semibold mb-4 line-through">3200 درهم</p>
          <ul className="text-sm mb-4 list-disc list-inside space-y-1">
            <li>حضور الدورة</li>
            <li>المادة العلمية مطبوعة</li>
            <li>مقعد متقدم</li>
            <li>استراحات الشاي</li>
            <li>الحصول على تسجيل الدورة لمدة سنة كاملة</li>
            <li>شهادة حضور الدورة</li>
          </ul>
          <a
            href="https://dawarati.ma?add-to-cart=13653&quantity=1&e-redirect=https://dawarati.ma/cart/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition"
          >
            احجز الآن
          </a>
        </div>

        {/* Diamond Ticket */}
        <div className="border border-gray-300 rounded p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">التذكرة الماسية</h3>
          <p className="mb-1">الهشاشة النفسية و الصلابة النفسية</p>
          <p className="text-2xl font-bold mb-1">7200</p>
          <p className="text-xl font-semibold mb-4 line-through">6900 درهم</p>
          <ul className="text-sm mb-4 list-disc list-inside space-y-1">
            <li>حضور الدورة</li>
            <li>مقعد أمامي مميز</li>
            <li>المادة العلمية مطبوعة</li>
            <li>استراحات شاي</li>
            <li>وجبات غداء طوال أيام الدورة</li>
            <li>التسجيل الكامل للدورة لمدة عام كامل</li>
            <li>أولوية الحصول على كتب د.احمد هارون مع التوقيع</li>
            <li>لقاء جماعي وحصري مع د.احمد هارون</li>
            <li>فريق خدمة خاص لتلبية احتياجاتك</li>
            <li>شهادة حضور الدورة</li>
          </ul>
          <a
            href="https://dawarati.ma?add-to-cart=13638&quantity=1&e-redirect=https://dawarati.ma/cart/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition"
          >
            احجز الآن
          </a>
        </div>
      </section>

      {/* Notice Section */}
      <section className="container mx-auto max-w-5xl py-8 px-4 md:px-0 text-center">
        <p className="font-semibold text-red-600 mb-4">
          تنبيه: " المقاعد محدودة حسب نوعية التذكرة، وسيتم ترتيب الجلوس حسب أولوية التسجيل"
        </p>
        <p className="mb-6 font-semibold text-lg">استغل الفرصة وانضم إلينا الآن</p>
        <p className="mb-6 font-semibold text-lg">
          دورة استثنائية تجمع بين العلم والتطبيق العملي لتطوير صلابتك النفسية وتعزيز قوتك الداخلية!
        </p>
        <p className="mb-6">
          لأننا في “وين” نحرص دائمًا على تقديم أقوى البرامج التدريبية التي تدعم نجاحك الشخصي والمهني، فإن دورة “الصلابة النفسية و الهشاشة النفسية” هي فرصتك لاكتساب الأدوات التي تحتاجها للتعامل مع الضغوط بثقة وثبات.
        </p>
        <img
          src="https://dawarati.ma/wp-content/uploads/elementor/thumbs/2ea0611f-b23e-482a-8f65-1e92daf43f7e-r1f2x1hes97kh68civtak043v8af78uahy4dzckefk.jpg"
          alt="دورة الصلابة النفسية و الهشاشة النفسية"
          className="mx-auto rounded shadow mb-6 max-w-md"
        />
        <p className="mb-6 font-semibold text-lg">بادر وكن من أوائل المنضمين لهذا الحدث المتميز</p>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto max-w-5xl py-8 px-4 md:px-0">
        <h2 className="text-2xl font-semibold mb-4">ماذا ستستفيد من الدورة؟</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>تحليل شخصي معمق: ستتعرف على مدى قوة صلابتك النفسية وما إذا كنت تعاني من هشاشة نفسية دون أن تدرك ذلك.</li>
          <li>فهم أسباب الهشاشة النفسية: معرفة جذور المشكلات النفسية التي تؤثر على قراراتك وعلاقاتك وأدائك اليومي.</li>
          <li>اكتساب مهارات مواجهة الضغوط: تعلم استراتيجيات فعالة للتعامل مع التوتر والقلق والمواقف الصعبة بطريقة صحية</li>
          <li>بناء شخصية أكثر صلابة: تطوير قدراتك على الصمود أمام التحديات، وتعزيز ثقتك بنفسك واتخاذ قرارات حاسمة دون تردد.</li>
          <li>تحقيق التوازن النفسي: ممارسة تمارين تطبيقية لتقوية قدرتك على التحكم في مشاعرك وسلوكك عند مواجهة الصعوبات</li>
          <li>تطبيقات عملية فورية: لأن الدورة ليست مجرد نظريات، بل تحتوي على تمارين وتمارين عملية لتطبيق ما تتعلمه على أرض الواقع</li>
        </ul>
      </section>

      {/* Why Register Section */}
      <section className="container mx-auto max-w-5xl py-8 px-4 md:px-0">
        <h2 className="text-2xl font-semibold mb-4">لماذا يجب أن تسجّل الآن في دورة "الصلابة النفسية و الهشاشة النفسية"؟</h2>
        <p className="mb-6">
          في عالم مليء بالتحديات والضغوط، امتلاك صلابة نفسية قوية لم يعد رفاهية بل ضرورة. هذه الدورة تمنحك الأدوات اللازمة لتصبح أكثر قوة في مواجهة المصاعب، وتساعدك على تحقيق التوازن النفسي والاستقرار العاطفي.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=212662615681&text=%20مرحبا%20انا%20مهتم%20(ة)%20بدورة%20الصلابة%20النفسية%20والهشاشة%20النفسية%20وأريد%20أتسجل"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition"
        >
          اكتشف التفاصيل
        </a>
      </section>

      {/* Final Call to Action */}
      <section className="container mx-auto max-w-5xl py-8 px-4 md:px-0 text-center">
        <h2 className="text-2xl font-semibold mb-4">القرار بيدك... إما التغيير الآن أو البقاء في نفس الدائرة!</h2>
        <p className="mb-6">
          كل يوم تأخير يُبقيك في نفس الدائرة—إذا كنت تعاني من التردد أو القلق أو الضغط النفسي، فإن تأجيل قرارك يعني استمرار الوضع كما هو، بينما يمكنك اليوم اتخاذ خطوة حقيقية نحو حياة أكثر قوة وثباتًا. تذكر أن الاستثمار في نفسك هو أفضل استثمار، فصحتك النفسية تؤثر على كل جانب من حياتك، من عملك وعلاقاتك إلى سعادتك الشخصية. لا تنتظر الظروف المثالية، اصنعها الآن!
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=212662615681&text=%20مرحبا%20انا%20مهتم%20(ة)%20بدورة%20الصلابة%20النفسية%20والهشاشة%20النفسية%20وأريد%20أتسجل"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition"
        >
          احجز الآن
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-300 py-8 mt-12">
        <div className="container mx-auto max-w-5xl px-4 md:px-0 text-center space-y-4">
          <div className="flex justify-center space-x-6 rtl:space-x-reverse">
            <a href="https://www.facebook.com/winglobal.ma" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-600 hover:text-gray-800 text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com/win_be_the_winner" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-gray-800 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCDdwXkoXK6n0zMyga0Y2fEw" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-600 hover:text-gray-800 text-2xl">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://t.me/WinBeTheWinner" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-gray-600 hover:text-gray-800 text-2xl">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=212689104823" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-600 hover:text-gray-800 text-2xl">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          <div className="text-sm text-gray-600">
            <p>روابطنا</p>
            <p>
              <a href="https://www.facebook.com/winglobal.ma" className="hover:underline">Facebook</a> |{' '}
              <a href="https://instagram.com/win_be_the_winner" className="hover:underline">Instagram</a> |{' '}
              <a href="https://www.youtube.com/channel/UCDdwXkoXK6n0zMyga0Y2fEw" className="hover:underline">Youtube</a> |{' '}
              <a href="https://t.me/WinBeTheWinner" className="hover:underline">Telegram</a> |{' '}
              <a href="https://api.whatsapp.com/send?phone=212689104823" className="hover:underline">Whatsapp</a>
            </p>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <a href="https://dawarati.ma/%d8%b4%d8%b1%d9%88%d8%b7-%d8%a7%d9%84%d8%a8%d9%8a%d8%b9/" className="hover:underline">شروط البيع</a> |{' '}
            <a href="https://dawarati.ma/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%B5%D9%8A%D8%A9/" className="hover:underline">سياسة الخصوصية</a>
          </div>
          <div className="mt-4">
            <img
              src="https://dawarati.ma/wp-content/uploads/2022/05/Logo-Win-New-01-300x300.png"
              alt="Logo Win Footer"
              className="mx-auto h-20"
            />
          </div>
          <div className="text-sm text-gray-600 mt-4 space-y-1">
            <p>كل الحقوق محفوظة</p>
            <p>للتواصل معنا</p>
            <p>Welcome@btw-business.com</p>
            <p>+212689-104823</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
