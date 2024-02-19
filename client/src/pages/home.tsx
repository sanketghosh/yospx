import { Link } from "react-router-dom";
import {
  ForwardIcon,
  HeartIcon,
  MessageSquare,
  PlusCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      <Link
        to={"/create-post"}
        className="bg-secondary flex cursor-pointer items-center justify-between rounded-full border px-4 py-3 shadow-sm"
      >
        <p className="text-muted-foreground">
          Feel free to write your thoughts...
        </p>
        <PlusCircle className="text-muted-foreground" />
      </Link>

      <div className="mt-5">
        <div className="space-y-3 rounded-md border px-4 py-3  shadow-md">
          <p className="text-lg font-medium underline underline-offset-2">
            @iamuserone
          </p>
          <p className="text-muted-foreground line-clamp-3 leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            deleniti cum, vitae temporibus nemo aut similique error minus,
            excepturi earum officia, doloribus exercitationem dolorem cupiditate
            consequatur commodi nam nesciunt dolores a animi! Dolorem dolorum
            consequuntur quisquam, sed optio impedit, consequatur, facere
            recusandae sequi enim cumque itaque voluptatem nulla iste laborum
            repudiandae iusto voluptatum soluta quasi est obcaecati.
            Necessitatibus deleniti, quae quos amet exercitationem possimus
            laborum consectetur accusantium suscipit impedit excepturi iste
            facilis totam minus consequuntur praesentium eos nihil soluta
            voluptate quidem repellat! Atque dolor excepturi reprehenderit
            quibusdam ab neque accusamus ducimus in quasi, non exercitationem
            dolorem porro, culpa fugit ea suscipit enim ipsam reiciendis error
            optio ratione aut, temporibus rerum. Perferendis perspiciatis odio,
            doloremque explicabo ex ducimus, expedita doloribus facere molestiae
            corporis unde beatae? Adipisci ullam magnam recusandae autem soluta
            aperiam accusamus a nemo, provident officia officiis odit! Nulla in
            ipsa accusantium itaque molestiae, tempora expedita explicabo nam
            eligendi dolorem sequi distinctio mollitia iste architecto
            asperiores ea. Debitis dignissimos itaque sit. Quas praesentium ab
            possimus dicta a in esse ratione. Sit eos esse assumenda, soluta nam
            recusandae accusantium nostrum, excepturi neque quo cum odio? Beatae
            ratione amet neque vero veritatis expedita esse aperiam, officiis
            cum. Atque vitae sit porro maiores reiciendis numquam! Porro eos
            amet laborum, at unde dolores officia magni, corrupti laudantium
            odio quo, assumenda aperiam blanditiis impedit id pariatur
            laboriosam. Necessitatibus sapiente, perspiciatis unde repudiandae
            excepturi id quasi nihil ipsam esse, quos eligendi. Iure dicta
            repudiandae hic quidem mollitia magnam dolorem. Deleniti eius, nemo
            aliquam quasi id distinctio fugiat ipsam pariatur ab adipisci sed
            repellendus veniam excepturi ipsa perferendis incidunt quibusdam,
            exercitationem sunt ut minus quod magnam deserunt omnis sequi?
            Placeat nemo dicta alias aliquid. Expedita nostrum placeat suscipit
            exercitationem repudiandae! Rem incidunt consequuntur quisquam sint
            quos, voluptatibus pariatur expedita temporibus doloribus dolorem ut
            ratione laudantium minima maiores.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <HeartIcon size={17} fill="black" />
              <p className="text-sm">2.3k</p>
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare size={17} fill="black" />
              <p className="text-sm">979</p>
            </span>
            <span className="flex items-center gap-1">
              <ForwardIcon size={17} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
