interface CourseType {
  key: string;
  title: string;
  desc: string;
  duration: string;
  format: string;
  language: string;
  icon: string;
}

interface CategoryData {
  key: string;
  label: string;
  icon: string;
  suitable: string;
  courses: CourseType[];
}

interface CoursesTabsProps {
  categories: CategoryData[];
  bookLabel: string;
  durationLabel: string;
  formatLabel: string;
  languageLabel: string;
  suitableLabel: string;
}

export default function CoursesTabs({
  categories,
  bookLabel,
  durationLabel,
  formatLabel,
  languageLabel,
  suitableLabel,
}: CoursesTabsProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => {
          const course = cat.courses[0];
          return (
          <div
            key={cat.key}
            className="card border-t-4 border-brand-green flex flex-col"
          >
            <div className="text-4xl mb-4">{cat.icon}</div>
            <p className="mb-2 font-body text-sm font-semibold uppercase tracking-wide text-brand-green">
              {suitableLabel}: {cat.suitable}
            </p>
            <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-3">
              {course.title}
            </h3>
            <p className="text-gray-600 font-body mb-6 flex-1">{course.desc}</p>

            <div className="space-y-2 text-sm text-gray-500 font-body mb-6">
              <div className="flex items-center gap-2">
                <span className="text-brand-green">&#9201;</span>
                <span className="font-semibold">{durationLabel}:</span> {course.duration}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-green">&#128187;</span>
                <span className="font-semibold">{formatLabel}:</span> {course.format}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-green">&#127760;</span>
                <span className="font-semibold">{languageLabel}:</span> {course.language}
              </div>
            </div>

            <a
              href={`https://wa.me/6582376302?text=${encodeURIComponent(
                `Hi Ruby, I'm interested in ${course.title}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base w-full text-center"
            >
              {bookLabel}
            </a>
          </div>
          );
        })}
      </div>
    </div>
  );
}
