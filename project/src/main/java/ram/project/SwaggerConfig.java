package ram.project;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig { // Swagger에 연동하기 위해 필요한 config파일

    //Swagger 연동
    @Bean
    public GroupedOpenApi publicApi(){
        return GroupedOpenApi.builder()
            .group("v1-definition") // 그룹 이름 지정
            .pathsToMatch("/api/**") // 로컬/api//~~로 시작하는 모든 api들에 매핑
            .build();
    }

    //Swagger API 명세를 웹 프라우저에서 확인할 때 보이는 화면 커스텀
    @Bean
    public OpenAPI springShopOpenApi(){
        return new OpenAPI()
            .info(new Info().title("BEER_PROJECT API") // 제목
                    .description("맥주 커뮤니티 프로젝트 API 명세서 입니다") // 설명
                    .version("v0.0.1"));
    }
}
