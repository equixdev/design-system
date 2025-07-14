import { Code } from "@/equix/components/Code";
import { View } from "@/equix/components/View";
import { ComponentsData } from "@/equix/types";

const data: ComponentsData = {
    View: {
        description: (
          <p>
            View - вид, представление - вертикальный контейнер для любого
            содержимого, занимающий основную часть экрана. Любая страница имеет хотя
            бы 1 вью. Например, если страница сайта представляет из себя разворот
            книги, то есть просто текст, то <Code>body</Code> или <Code>main</Code>{" "}
            этого сайта являются вью. Если же слева на странице есть боковое меню, а
            справа - горизонтальный список карточек с похожими статьями, то на
            странице уже 3 вью - для каждой колонки разного контента. Вью всегда
            занимает все свободное на экране место. Поскольку EQUIX ограничивает
            страницы шириной в 1280px (пикселей), а вью может быть несколько, для
            них предусмотрены следующие размеры: 1x - с максимальной шириной в
            320px, 2x - 640px, 3x - 960px, 4x - 1280px. Например, лендинг как
            правило состоит из одного вью размера 3x и двух баров - хедера и футера
            - таких же размеров.
          </p>
        ),
        ExampleComponent: () => (
          <>
            <View className="w-[320px] border border-accent h-[320px]"></View>
            <View className="w-[640px] border border-accent h-[320px]"></View>
          </>
        ),
        usage: `<View className="w-[320px] border border-accent h-[320px]"></View>
            <View className="w-[640px] border border-accent h-[320px]"></View>`,
      },
}

export default data;
